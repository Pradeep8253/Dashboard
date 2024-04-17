import React, { useState } from 'react';
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const DataTable = ({ data }) => {
    const [sortedData, setSortedData] = useState(data);
    const [sortConfig, setSortConfig] = useState(null);
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        const sorted = [...data].sort((a, b) => {
            if (a[key] < b[key]) {
                return direction === 'asc' ? -1 : 1;
            }
            if (a[key] > b[key]) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
        setSortedData(sorted);
        setSortConfig({ key, direction });
    };

    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    const renderArrow = (name) => {
        if (!sortConfig || sortConfig.key !== name) {
            return <div><FaCaretUp /><FaCaretDown /></div>;
        }
        return sortConfig.direction === 'asc' ? <div><FaCaretUp /><FaCaretDown style={{ color: "#7c7c7c" }} /></div> : <div><FaCaretUp style={{ color: "#7c7c7c" }} /><FaCaretDown /></div>;
    };

    // Pagination
    const totalPages = Math.ceil(sortedData.length / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, sortedData.length);
    const currentData = sortedData.slice(startIndex, endIndex);

    // Pagination handlers
    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>
            <table className="table table-hover  table-bordered">
                <thead>
                    <tr>
                        <th onClick={() => requestSort('name')} className={getClassNamesFor('name')}> <div> Name {renderArrow('name')}</div></th>
                        <th onClick={() => requestSort('position')} className={getClassNamesFor('position')}> <div>Position {renderArrow('position')}</div></th>
                        <th onClick={() => requestSort('office')} className={getClassNamesFor('office')}> <div>Office {renderArrow('office')}</div></th>
                        <th onClick={() => requestSort('age')} className={getClassNamesFor('age')}><div> Age {renderArrow('age')}</div></th>
                        <th onClick={() => requestSort('start_date')} className={getClassNamesFor('start_date')}><div>Start date {renderArrow('start_date')}</div></th>
                        <th onClick={() => requestSort('salary')} className={getClassNamesFor('salary')}><div>Salary {renderArrow('salary')}</div></th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.name}</td>
                            <td>{row.position}</td>
                            <td>{row.office}</td>
                            <td>{row.age}</td>
                            <td>{row.start_date}</td>
                            <td>{row.salary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <nav aria-label="Page navigation example" style={{ display: "flex", justifyContent: "end" }}>
                <ul class="pagination">
                    <li class="page-item" style={{ cursor: "pointer" }}><span class="page-link" onClick={prevPage} disabled={currentPage === 1} >Previous</span></li>
                    <li class="page-item"><span class="page-link" style={{ color: "black" }}>Page {currentPage} of {totalPages}</span></li>

                    <li class="page-item" style={{ cursor: "pointer" }}><span class="page-link" onClick={nextPage} disabled={currentPage === totalPages}>Next</span></li>
                </ul>

            </nav>
        </>
    );
};

export default DataTable;