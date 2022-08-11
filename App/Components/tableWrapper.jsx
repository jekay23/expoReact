import React, {useState, useEffect} from 'react';
import axios from 'axios';
import followLink from './Config/followLink.jsx';
import Table from './table.jsx';
import getColumns from './Config/columnTitles.jsx';
import {useParams} from 'react-router-dom';

export default function TableWrapper(props) {
    const compilationID = useParams().id;
    const apiUrls = {
        'compilations': '/api/compilations',
        'profiles': '/api/users',
        'photos': '/api/photos',
        'compilation': '/api/compilation-items?compilationID=' + compilationID
    }
    const apiUrl = apiUrls[props.type];
    if ('undefined' === typeof apiUrl) {
        throw 'Unknown table';
    }

    let columns = getColumns(props.type, () => {getData()});

    const [loadingData, setLoadingData] = useState(true);
    const [data, setData] = useState([]);
    const [photoID, setPhotoID] = useState('');

    async function getData() {
        await axios
            .get(apiUrl)
            .then((response) => {
                setData(response.data);
                setLoadingData(false);
            });
    }

    useEffect(() => {
        if (loadingData) {
            getData();
        }
    }, [data]);

    const handleClick = () => {
        const creationApiUrl = '/api/createCompilation';
        followLink(creationApiUrl).then(() => {getData();});
    }

    const handleChange = (event) => {
        setPhotoID(event.target.value);
    }

    const handleSubmit = (event) => {
        const creationApiUrl = '/api/addCompilationItem?compilationID=' + compilationID + '&photoID=' + photoID;
        followLink(creationApiUrl).then(() => {getData();});
        event.preventDefault();
    }

    let button = '';
    if ('compilations' === props.type) {
        button = <button className={'mmd-button'} type={'button'} onClick={handleClick}>Добавить</button>
    } else if ('compilation' === props.type) {
        button = (
            <form onSubmit={handleSubmit}>
                <label className={'mmd-input-wrap mmd-admin-input-wrap'}>
                    ID фотографии
                    <input type={'text'} name={'photoID'} id={'addPhotoByID'} required={true} onChange={handleChange}/>
                </label>
                <input type={'submit'} className={'mmd-button'} value={'Добавить'}
                       style={{paddingTop: '.5rem', paddingBottom: '.5rem'}}/>
            </form>
        )
    }

    return (
        <div className={'text-center'}>
            {loadingData ? (<p>Загрузка...</p>) : (<Table columns={columns} data={data}/>)}
            {button}
        </div>
    );
}