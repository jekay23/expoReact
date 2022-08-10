import React from 'react';
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
            .get(apiUrl);
    }

    const handleChange = ({value: value}) => {
        let apiUrl = '/api/changeUserLevel?userID=' + props.userID + '&value=' + value;
        pingApi(apiUrl);
    }

    return <Select defaultValue={options[props.value - 1]} onChange={handleChange} options={options}/>;
}