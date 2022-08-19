import React from 'react';
import {useTable} from 'react-table';
import {Column} from 'react-table';

interface TableProps {
    columns: Column[];
    data: any
}

export default function Table(props: TableProps) {
    const columns = props.columns;
    const data = props.data;
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        rows
    } = useTable({columns, data});
    return (
        <div className="pt-5 d-flex justify-content-center">
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