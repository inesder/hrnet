import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

const Table = ({ theadData, tbodyData, customClass }) => {
    const [filterText, setFilterText] = useState("");
    const [sortedData, setSortedData] = useState(tbodyData);
    const [sortDirection, setSortDirection] = useState("asc");
    const [sortedColumn, setSortedColumn] = useState(null);

    const handleFilterChange = (e) => {
        setFilterText(e.target.value.toLowerCase());
    };

    const handleSort = (columnIndex) => {
        const sorted = [...sortedData].sort((a, b) => {
            const aValue = a.items[columnIndex]?.toString().toLowerCase();
            const bValue = b.items[columnIndex]?.toString().toLowerCase();
            if (sortDirection === "asc") {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
        setSortedData(sorted);
        setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        setSortedColumn(columnIndex);
    };

    const filteredData = sortedData.filter((row) =>
        row.items.some((item) =>
            item.toString().toLowerCase().includes(filterText)
        )
    );

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
                        {theadData.map((header, index) => (
                            <TableHeadItem
                                key={header}
                                item={header}
                                onClick={() => handleSort(index)}
                                sortDirection={sortedColumn === index ? sortDirection : null}
                                isSorted={sortedColumn === index}
                            />
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
                            <td colSpan={theadData.length} style={{ textAlign: "center" }}>
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
