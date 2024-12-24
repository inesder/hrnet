import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

const Table = ({ theadData, tbodyData, customClass }) => {
    const [filterText, setFilterText] = useState("");

    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const filteredData = tbodyData.filter((row) => {
        return row.items.some((item) =>
            item.toString().toLowerCase().includes(filterText)
        );
    });

    return (
        <div className="table-container">
            <input
                type="text"
                id="myInput"
                placeholder="Search..."
                onChange={handleFilterChange}
                value={filterText}
            />
            <table className={customClass} id="myTable">
                <thead>
                    <tr>
                        {theadData.map((header) => (
                            <TableHeadItem key={header} item={header} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <TableRow key={item.id} data={item.items} />
                        ))
                    ) : (
                        <tr>
                            <td colSpan={theadData.length} style={{ textAlign: 'center' }}>
                                No matching employees found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
