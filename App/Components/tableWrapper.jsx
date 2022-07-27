import React from 'react';
import axios from 'axios';
import Table from './table.jsx';
import getColumns from './columnTypes.jsx'

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

    const [loadingData, setLoadingData] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        async function getData() {
            await axios
                .get(apiUrl)
                .then((response) => {
                    console.log(response.data);
                    setData(response.data);
                    setLoadingData(false);
                });
        }

        if (loadingData) {
            getData();
        }
    }, []);

    return (
        <div>
            {loadingData ? (<p>Загрузка...</p>) : (<Table columns={columns} data={data}/>)}
        </div>
    );
}
