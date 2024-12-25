import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const TableHeadItem = ({ item, onClick, sortDirection, isSorted }) => {
    return (
        <th onClick={onClick} style={{ cursor: "pointer", textAlign: "left" }}>
            {item}
            {isSorted && (
                <FontAwesomeIcon
                    icon={sortDirection === "asc" ? faArrowUp : faArrowDown}
                    style={{ marginLeft: "8px" }} 
                />
            )}
        </th>
    );
};

export default TableHeadItem;
