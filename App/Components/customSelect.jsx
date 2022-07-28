import React, {useEffect} from 'react';
import Select from 'react-select';

export default function CustomSelect(props) {
    // const [enabled, setSwitchState] = React.useState(props.value);

    const options = [
        {value: 1, label: 'Нет'},
        {value: 2, label: 'Редактор'},
        {value: 3, label: 'Админ'}
    ]

    // const switchTrigger = () => {
    //     console.log('AAAAAA CHANGED');
    //     setSwitchState(!enabled);
    // };

    // useEffect(() => {
    //     console.log('EFFECT HOOK WORKS HOLEY SHEEEET')
    // }, [enabled])

    return <Select defaultValue={options[props.value - 1]} options={options}/>;
}