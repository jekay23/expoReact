import React, {useState} from 'react';
import Select from 'react-select';
import followLink from './Config/followLink';

interface CustomSelectProps {
    value: number;
    userID: string
}

interface AdminLevel {
    value: number;
    label: string;
}

export default function CustomSelect(props: CustomSelectProps){

    const adminLevels: AdminLevel[] = [
        {value: 1, label: 'Нет'},
        {value: 2, label: 'Редактор'},
        {value: 3, label: 'Админ'}
    ];

    const labels = ['', 'Нет', 'Редактор', 'Админ']

    const [selectedOption, setSelectedOption] = useState<AdminLevel>({value: props.value, label: labels[props.value]});

    const handleChange = (option: AdminLevel) => {
        let apiUrl = '/api/changeUserLevel?userID=' + props.userID + '&value=' + option.value;
        setSelectedOption({value: option.value, label: labels[option.value]})
        followLink(apiUrl);
    }

    return (
        <div style={{width: '8rem'}}>
            <Select defaultValue={selectedOption} onChange={handleChange} options={adminLevels}/>
        </div>
    );
}