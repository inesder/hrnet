import React from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

const Table = ({ theadData, tbodyData, customClass }) => {
    return (
        <table className={customClass}>
            <thead>
                <tr>
                    {theadData.map((h) => (
                        <TableHeadItem key={h} item={h} />
                    ))}
                </tr>
            </thead>
            <tbody>
                {tbodyData.map((item) => (
                    <TableRow key={item.id} data={item.items} />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
