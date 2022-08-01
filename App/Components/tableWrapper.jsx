import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from './table.jsx';
import getColumns from './columnTitles.jsx'

export default function TableWrapper(props) {
    let apiUrl;
    switch (props.type) {
        case 'compilations':
            apiUrl = '/api/compilations';
            break;
        case 'profiles':
            apiUrl = '/api/users';
            break;
        case 'photos':
            apiUrl = '/api/photos';
            break;
        default:
            throw 'Unknown table';
    }

    let columns = getColumns(props.type);

    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState([]);

    async function getData() {
        await axios
            .get(apiUrl)
            .then((response) => {
                console.log(response.data);
                setData(response.data);
                setLoadingData(false);
            });
    }

    useEffect(() => {
        if (loadingData) {
            getData();
        }
    }, [data]);

    async function pingApi(apiUrl) {
        await axios
            .get(apiUrl)
            .then((response) => {
                console.log('API pinged');
            });
    }

    const handleClick = () => {
        const creationApiUrl = '/api/createCompilation';
        pingApi(creationApiUrl);
        getData();
    }

    const button = ('compilations' === props.type) ? <button className={'mmd-button'} type={'button'} onClick={handleClick}>Добавить</button> : '';
        
    return (
        <div className={'text-center'}>
            {loadingData ? (<p>Загрузка...</p>) : (<Table columns={columns} data={data}/>)}
            {button}
        </div>
    );
}
