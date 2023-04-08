import { useEffect, useState } from "react";

interface Props {
    searchVal: any;
    retrieve: () => any;
}


export const useTableSearch = ({ searchVal, retrieve }: Props) => {
    const [filteredData, setFilteredData] = useState([]);
    const [origData, setOrigData] = useState([]);
    const [searchIndex, setSearchIndex] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        setLoading(true);
        const crawl = (data?: any, allValues?: any) => {
            if (!allValues) allValues = [];
            for (var key in data) {
                if (typeof data[key] === "object") crawl(data[key], allValues);
                else allValues.push(data[key] + " ");
            }
            return allValues;
        };

        const fetchData = async () => {
            const res = await retrieve();
            if (res) {
                const datas = res.payload.data.results;
                setOrigData(datas);
                setFilteredData(datas);
                const searchInd = datas?.map((user: any) => {
                    const allValues = crawl(user);
                    return { allValues: allValues.toString() };
                });
                setSearchIndex(searchInd);
                if (datas) setLoading(false);
            }
        };
        fetchData();
    }, [retrieve]);

    useEffect(() => {
        if (searchVal) {
            const reqData: any = searchIndex.map((data: any, index: any) => {
                if (data.allValues.toLowerCase().indexOf(searchVal.toLowerCase()) >= 0)
                    return origData[index];
                return null;
            });
            setFilteredData(
                reqData.filter((data: any) => {
                    if (data) return true;
                    return false;
                })
            );
        } else setFilteredData(origData);
    }, [searchVal, origData, searchIndex]);

    return { filteredData, loading };
}