import React from 'react';
import CustomSwitch from "./customSwitch.jsx";

export default function getColumns(type) {
    switch (type) {
        case 'compilations':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'compilationID',
            }, {
                Header: 'Название', accessor: 'name',
            }, {
                Header: 'Описание', accessor: 'description',
            }, {
                Header: 'Дата создания', accessor: 'creationTime',
            }, {
                Header: 'Выставка', accessor: 'isExhibit',
            }, {
                Header: 'Номер выставки', accessor: 'exhibitNumber',
            }, {
                Header: 'Скрыть', accessor: 'isHidden',
            }], []);
        case 'profiles':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'userID',
            }, {
                Header: 'Email', accessor: 'email',
            }, {
                Header: 'Имя', accessor: 'name',
            }, {
                Header: 'Скрыть профиль', accessor: 'isHiddenProfile',
            }, {
                Header: 'Скрыть описание', accessor: 'isHiddenBio',
            }, {
                Header: 'Скрыть аватар', accessor: 'isHiddenAvatar',
            }, {
                Header: 'Доступ', accessor: 'isEditor',
            }], []);
        case 'photos':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'photoID',
            }, {
                Header: 'Ссылка', accessor: 'location',
            }, {
                Header: 'Автор', accessor: 'addedBy',
            }, {
                Header: 'Скрыть', accessor: 'isHiddenByEditor',
            }, {
                Header: 'Скрыто автором', accessor: 'isHiddenByUser',
            }], []);
        default:
            throw 'Unknown table';
    }
}