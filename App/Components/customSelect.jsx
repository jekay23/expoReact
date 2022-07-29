import React, {useEffect} from 'react';
import Select from 'react-select';
import axios from "axios";

export default function CustomSelect(props) {
    const options = [
        {value: 1, label: 'Нет'},
        {value: 2, label: 'Редактор'},
        {value: 3, label: 'Админ'}
    ]

    async function pingApi(apiUrl) {
        await axios
            .get(apiUrl)
            .then((response) => {
                console.log('API pinged');
            });
    }

    const handleChange = ({value: value, label: label}) => {
        let apiUrl = '/api/changeUserLevel?userID=' + props.userID + '&value=' + value;
        console.log('Go to ' + apiUrl);
        pingApi(apiUrl);
    }

    return <Select defaultValue={options[props.value - 1]} onChange={handleChange} options={options}/>;
}