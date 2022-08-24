import React from 'react';
import {useGlobalFilter, useTable} from 'react-table';
import {Column} from 'react-table';

interface TableProps {
    columns: Column[];
    data: any;
}

export default function Table(props: TableProps) {
    const columns = props.columns;
    const data = props.data;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows,
        setGlobalFilter,
        state
    } = useTable({columns, data}, useGlobalFilter);
    return (
        <div className="pt-5 d-flex justify-content-center flex-column">
            <div className="pt-3">
                <label className="mmd-input-wrap mmd-admin-input-wrap">
                    Глобальный фильтр
                    <input
                        type="text"
                        value={state.globalFilter || ""}
                        onChange={e => setGlobalFilter(e.target.value)}
                    />
                </label>
            </div>
            <table {...getTableProps()} className={'mmd-admin-table'}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (<td {...cell.getCellProps()}>{cell.render('Cell')}</td>)
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    );
}