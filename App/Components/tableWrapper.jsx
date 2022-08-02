import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from './table.jsx';
import getColumns from './columnTitles.jsx';
import { useParams } from 'react-router-dom';

export default function TableWrapper(props) {
    let apiUrl;
    let id;
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
        case 'compilation':
            const params = useParams();
            id = params.id;
            apiUrl = '/api/compilation-items?compilationID=' + id;
            break;
        default:
            throw 'Unknown table';
    }

    let columns = getColumns(props.type);

    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState([]);
    const [photoID, setPhotoID] = useState('');

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

    const handleChange = (event) => {
        setPhotoID(event.target.value);
    }

    const handleSubmit = (event) => {
        const creationApiUrl = '/api/addCompilationItem?compilationID=' + id +'&photoID=' + photoID;
        pingApi(creationApiUrl);
        getData();
        event.preventDefault();
    }

    let creation = '';
    if ('compilations' === props.type) {
        creation = <button className={'mmd-button'} type={'button'} onClick={handleClick}>Добавить</button>
    } else if ('compilation' === props.type) {
        creation = (
            <form onSubmit={handleSubmit}>
                <label className={'mmd-input-wrap mmd-admin-input-wrap'}>
                    ID фотографии
                    <input type={'text'} name={'photoID'} id={'addPhotoByID'} required={true} onChange={handleChange} />
                </label>
                <input type={'submit'} className={'mmd-button'} value={'Добавить'} style={{paddingTop: '.5rem', paddingBottom: '.5rem'}}/>
            </form>
        )
    }
        
    return (
        <div className={'text-center'}>
            {loadingData ? (<p>Загрузка...</p>) : (<Table columns={columns} data={data} rerender={() => {getData()}}/>)}
            {creation}
        </div>
    );
}
