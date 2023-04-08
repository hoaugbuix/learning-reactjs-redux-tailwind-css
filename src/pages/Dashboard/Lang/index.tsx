import React, { ReactElement, useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getAllLang } from "../../../reduxs/thunks/lang.thunks";
import Table from "../../../components/Table";
import Badge from "../../../components/Badge";
import * as Icons from "react-icons/fa";


const latestLangs = {
    header: [
        "ID",
        "Code",
        "Local",
        "English",
        "Vietnames",
        "Status",
        "Action"
    ],
}


const LangsStatus: any = {
    "-1": "primary",
    "0": "warning",
    "1": "success",
    "3": "danger"
}
const langActive: any = {
    "0": "Inactive",
    "1": "Active",
}




const mapStateToProps = (state: AppState) => ({
    isFetching: state.lang!.isFetching,
    langs: state.lang!.langs
})

const mapDispatchToProps = { getAllLang }

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> { }
const Lang: React.FC<Props> = (props: Props): ReactElement => {
    const { getAllLang, langs, isFetching } = props;
    const [dataLangs, setDataLangs] = useState<Lang[]>(langs);

    const renderHead = (item: any, index: any) => {
        return (
            <th key={index}>{item}</th>
        )
    }

    const renderBody = (item: Lang, index: any) => (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                <input
                    name="code"
                    type="text"
                    defaultValue={item.code}
                    onChange={(e => onChangeInput(e, item.id))}
                    placeholder="Type Code"
                />

            </td>
            <td>
                <input
                    name="local"
                    type="text"
                    defaultValue={item.local}
                    onChange={(e => onChangeInput(e, item.id))}
                    placeholder="Type Local"
                />
            </td>
            <td>{item.en} </td>
            <td>{item.vn}</td>
            <td>
                <Badge type={LangsStatus[item.activeFlag]} children={langActive[item.activeFlag]} />
            </td>
            <td className="table__row-action">
                <div><Icons.FaEdit /></div>
                <div><Icons.FaTrash /></div>
            </td>
        </tr>
    );



    useEffect(() => {
        setTimeout(() => {
            getAllLang()
        }, 150)
    }, [getAllLang])



    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>, id: string | number) => {
        const { name, value } = e.target;
        const editData = langs?.map((item: Lang) =>
            item.id === id && Object.keys(item).includes(name) ? { ...item, [name]: value } : item);
        setDataLangs(editData)
    }


    return (
        <div className="card">
            <div className="card__body">
                {
                    dataLangs && (
                        <Table
                            dataApi={getAllLang}
                            isLoading={isFetching}
                            headData={latestLangs.header}
                            renderHead={(item: any, index: any) => renderHead(item, index)}
                            bodyData={dataLangs}
                            renderBody={(item: any, index: any) => renderBody(item, index)}
                            limit={10}
                        />
                    )
                }
            </div>
        </div>)

};

export default connector(Lang);