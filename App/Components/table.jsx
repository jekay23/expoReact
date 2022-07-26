import React from 'react';
import {useTable} from 'react-table';

export default function Table(props) {
    let data = React.useMemo(() => [{
        col1: 'Eugene Yatsko', col2: '1',
    }, {
        col1: 'Платон Антониу', col2: '5',
    }, {
        col1: 'Слава Муавлёв', col2: '6',
    },], []);

    let columns = React.useMemo(() => [{
        Header: 'Имя', accessor: 'col1',
    }, {
        Header: 'ID', accessor: 'col2',
    }], []);

    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});
    return (
        <div className="pt-5 d-flex justify-content-center">
            <table {...getTableProps()}>
                <thead>
                {// Loop over the header rows
                    headerGroups.map(headerGroup => (// Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {// Loop over the headers in each row
                                headerGroup.headers.map(column => (// Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {// Render the header
                                            column.render('Header')}
                                    </th>))}
                        </tr>))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {// Loop over the table rows
                    rows.map(row => {
                        // Prepare the row for display
                        prepareRow(row)
                        return (// Apply the row props
                            <tr {...row.getRowProps()}>
                                {// Loop over the rows cells
                                    row.cells.map(cell => {
                                        // Apply the cell props
                                        return (<td {...cell.getCellProps()}>
                                            {// Render the cell contents
                                                cell.render('Cell')}
                                        </td>)
                                    })}
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    );
}