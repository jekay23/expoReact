import React from 'react';
import CustomSwitch from './customSwitch.jsx';
import CustomSelect from './customSelect.jsx'

export default function getColumns(type) {
    switch (type) {
        case 'compilations':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'compilationID', Cell: (props) => <a href={'/compilation/' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Название', accessor: 'name',
            }, {
                Header: 'Описание', accessor: 'description',
            }, {
                Header: 'Дата создания', accessor: 'creationTime',
            }, {
                Header: 'Выставка', accessor: 'isExhibit', Cell: (props) => <CustomSwitch value={!!parseInt(props.cell.value)} onColor={'#54B686'}/>
            }, {
                Header: 'Номер выставки', accessor: 'exhibitNumber',
            }, {
                Header: 'Скрыть', accessor: 'isHidden', Cell: (props) => <CustomSwitch value={!!parseInt(props.cell.value)}/>
            }], []);
        case 'profiles':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'userID', Cell: (props) => <a href={'/profile/' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Email', accessor: 'email', Cell: (props) => <a href={'mailto:' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Имя', accessor: 'name',
            }, {
                Header: 'Скрыть профиль', accessor: 'isHiddenProfile', Cell: (props) => <CustomSwitch value={!!parseInt(props.cell.value)}/>
            }, {
                Header: 'Скрыть описание', accessor: 'isHiddenBio', Cell: (props) => <CustomSwitch value={!!parseInt(props.cell.value)}/>
            }, {
                Header: 'Скрыть аватар', accessor: 'isHiddenAvatar', Cell: (props) => <CustomSwitch value={!!parseInt(props.cell.value)}/>
            }, {
                Header: 'Доступ', accessor: 'accessLevel', Cell: (props) => <CustomSelect value={parseInt(props.cell.value)}/>
            }], []);
        case 'photos':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'photoID',
            }, {
                Header: 'Имя файла', accessor: 'location', Cell: (props) => <a href={'/uploads/photos/' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Автор', accessor: 'addedBy', Cell: (props) => <a href={'/profile/' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Скрыть', accessor: 'isHiddenByEditor', Cell: (props) => <CustomSwitch value={!!parseInt(props.cell.value)}/>
            }, {
                Header: 'Скрыто автором', accessor: 'isHiddenByUser', Cell: (props) => <CustomSwitch value={!!parseInt(props.cell.value)} disabled={true}/>
            }], []);
        default:
            throw 'Unknown table';
    }
}