import React from 'react';
import CustomSwitch from '../customSwitch';
import CustomSelect from '../customSelect';
import CustomInput from '../customInput';
import {useParams} from 'react-router-dom';
import {CellProps} from 'react-table';

interface CustomRow {
    compilationID?: string;
    userID?: string;
    photoID?: string;
}

export default function getColumns(type: string, rerenderCallback: () => void) {
    switch (type) {
        case 'compilations':
            return React.useMemo(() => [{
                Header: 'ID',
                accessor: 'compilationID',
                Cell: (props: CellProps<CustomRow, string>) => <a
                    href={'/compilation/' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Название',
                accessor: 'name',
                Cell: (props: CellProps<CustomRow, string>) => <CustomInput value={props.cell.value || ''}
                                                                            compilationID={props.row.original.compilationID}
                                                                            adminAction={'changeName'}/>
            }, {
                Header: 'Описание',
                accessor: 'description',
                Cell: (props: CellProps<CustomRow, string>) => <CustomInput value={props.cell.value || ''}
                                                                            compilationID={props.row.original.compilationID}
                                                                            adminAction={'changeDesc'}/>
            }, {
                Header: 'Дата создания', accessor: 'creationTime',
            }, {
                Header: 'Выставка',
                accessor: 'isExhibit',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSwitch value={!!parseInt(props.cell.value)}
                                                                             onColor={'#54B686'}
                                                                             compilationID={props.row.original.compilationID}
                                                                             adminAction={'makeExhibit'}
                                                                             rerenderCallback={() => {
                                                                                 rerenderCallback()
                                                                             }}/>
            }, {
                Header: 'Номер выставки', accessor: 'exhibitNumber',
            }, {
                Header: 'Скрыть',
                accessor: 'isHidden',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSwitch value={!!parseInt(props.cell.value)}
                                                                             compilationID={props.row.original.compilationID}
                                                                             adminAction={'hide'}/>
            }, {
                Header: 'Действия',
                Cell: (props: CellProps<CustomRow, string>) => <a
                    href={'/admin/compilation/' + props.row.original.compilationID}>
                    <button className={'mmd-button'} type={'button'}
                            style={{paddingTop: '.5rem', paddingBottom: '.5rem', margin: '0'}}>Настроить
                    </button>
                </a>
            }], []);
        case 'profiles':
            return React.useMemo(() => [{
                Header: 'ID',
                accessor: 'userID',
                Cell: (props: CellProps<CustomRow, string>) => <a
                    href={'/profile/' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Email',
                accessor: 'email',
                Cell: (props: CellProps<CustomRow, string>) => <div className={'text-start'}><a
                    href={'mailto:' + props.cell.value}>{props.cell.value}</a></div>
            }, {
                Header: 'Имя', accessor: 'name', Cell: (props) => <div className={'text-start'}>{props.cell.value}</div>
            }, {
                Header: 'Скрыть профиль',
                accessor: 'isHiddenProfile',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSwitch value={!!parseInt(props.cell.value)}
                                                                             userID={props.row.original.userID}
                                                                             adminAction={'hideProfile'}/>
            }, {
                Header: 'Скрыть описание',
                accessor: 'isHiddenBio',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSwitch value={!!parseInt(props.cell.value)}
                                                                             userID={props.row.original.userID}
                                                                             adminAction={'hideBio'}/>
            }, {
                Header: 'Скрыть аватар',
                accessor: 'isHiddenAvatar',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSwitch value={!!parseInt(props.cell.value)}
                                                                             userID={props.row.original.userID}
                                                                             adminAction={'hideAvatar'}/>
            }, {
                Header: 'Доступ',
                accessor: 'accessLevel',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSelect value={parseInt(props.cell.value)}
                                                                             userID={props.row.original.userID}/>
            }], []);
        case 'photos':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'photoID',
            }, {
                Header: 'Имя файла',
                accessor: 'location',
                Cell: (props: CellProps<CustomRow, string>) => <div className={'text-start'}><a
                    href={'/uploads/photos/' + props.cell.value}>{props.cell.value}</a></div>
            }, {
                Header: 'Автор',
                accessor: 'addedBy',
                Cell: (props: CellProps<CustomRow, string>) => <a
                    href={'/profile/' + props.cell.value}>{props.cell.value}</a>
            }, {
                Header: 'Скрыть',
                accessor: 'isHiddenByEditor',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSwitch value={!!parseInt(props.cell.value)}
                                                                             photoID={props.row.original.photoID}/>
            }], []);
        case 'compilation':
            return React.useMemo(() => [{
                Header: 'ID', accessor: 'photoID',
            }, {
                Header: 'Имя файла',
                accessor: 'location',
                Cell: (props: CellProps<CustomRow, string>) => <div className={'text-start'}><a
                    href={'/uploads/photos/' + props.cell.value}>{props.cell.value}</a></div>
            }, {
                Header: 'Скрыть из подборки',
                Cell: (props: CellProps<CustomRow, string>) => <CustomSwitch value={!!parseInt(props.cell.value)}
                                                                             photoID={props.row.original.photoID}
                                                                             compilationID={useParams().id}/>
            }], []);
        default:
            throw 'Unknown table';
    }
}