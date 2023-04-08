import React, { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";
import { useTableSearch } from "../../hooks/useTableSerch";
import Input from "../Input";
import "./styles.css";


interface Props {
    limit?: any;
    dataApi?: any;
    bodyData?: any;
    headData?: any;
    renderHead?: any;
    renderBody?: any;
    titleSearch?: any;
    isLoading?: boolean;
}
const Table: React.FC<Props> = (props: Props) => {
    const [searchVal, setSearchVal] = useState('');

    const _onChangeDebounced = (text: string) => {
        setSearchVal(text)
    };

    const onChangeDebounced = useDebounce(_onChangeDebounced);


    const { filteredData, loading } = useTableSearch({
        searchVal,
        retrieve: props?.dataApi,
    });

    const duplicatesId = filteredData?.filter((value: any) => props.bodyData?.some((oneElement: any) => oneElement.id === value.id)).map((oneElement: any) => oneElement.id);

    const datas = filteredData.length > 0 ? [
        ...filteredData,
        ...props.bodyData?.filter((value: any) => !duplicatesId.some((oneDuplicate: any) => oneDuplicate === value.id))
    ] : [...filteredData];

    let initDataShow: any = (datas && props.limit) ? datas.slice(0, Number(props.limit)) : datas;
    const [dataShow, setDataShow] = useState<any>(initDataShow ? initDataShow : []);


    useEffect(() => {
        setTimeout(() => {
            let table = window.document.querySelectorAll('tbody tr')
            table.forEach(element => {
                if (loading) {
                    element.classList.add('loading')
                }
                element.classList.remove('loading')
            })
        }, 3000);
        setDataShow(initDataShow);
    }, [props, filteredData]) // eslint-disable-line react-hooks/exhaustive-deps

    let pages: any = 1;
    let range: any = [];

    if (props.limit !== undefined) {
        const page: any = Math.floor(datas.length / Number(props.limit));
        pages = datas.length % Number(props.limit) === 0 ? page : page + 1;
        range = [...Array.from(Array(pages).keys())];
    }

    const [currPage, setCurrPage] = useState(0)

    const selectPage = (page: any): void => {
        const start = Number(props.limit) * page
        const end = start + Number(props.limit)
        setDataShow(datas.slice(start, end))
        setCurrPage(page)
    }


    return (
        <>
            <div className="table__wrapper">
                <div>
                    <Input type="text" placeholder="Search..." value={''} onInputChange={(newInput) => { onChangeDebounced(newInput); }} />
                </div>
                <table>
                    {
                        props.headData && props.renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        props.headData?.map((item: any, index: any) => props.renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        datas && props.renderBody ? (
                            <tbody>
                                {
                                    dataShow?.map((item: any, index: any) => props.renderBody(item, index))
                                }
                            </tbody>
                        ) : <p>No resuls</p>
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item: any, index: any) => (
                                <div key={index} className={`table__pagination-item ${currPage === index ? 'active' : ''}`} onClick={() => selectPage(index)}>
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </>
    )
};

export default Table;
