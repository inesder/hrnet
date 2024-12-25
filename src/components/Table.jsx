import React, { useState } from "react";
import TableRow from "./TableRow";
import TableHeadItem from "./TableHeadItem";

const Table = ({ theadData, tbodyData, customClass }) => {
    const [filterText, setFilterText] = useState("");
    const [sortedData, setSortedData] = useState(tbodyData);
    const [sortDirection, setSortDirection] = useState("asc");
    const [sortedColumn, setSortedColumn] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); 
    const rowsPerPage = 4;

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

    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const totalPages = Math.ceil(filteredData.length / rowsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

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
                    {currentRows.length > 0 ? (
                        currentRows.map((item) => (
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
            {/* Boutons de Pagination */}
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>
                    Page {currentPage} of {totalPages}
                </span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Table;
