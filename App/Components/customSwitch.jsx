import React, {useEffect} from 'react';
import Switch from 'react-switch';

export default function CustomSwitch(props) {
    const [enabled, setSwitchState] = React.useState(props.value);

    let disabled = false;
    if ('undefined' !== typeof props.disabled && props.disabled) {
        disabled = true;
    }

    let onColor = '#ff8f81';
    if ('undefined' !== typeof props.onColor) {
        onColor = props.onColor;
    }

    const switchTrigger = () => {
        console.log('AAAAAA CHANGED');
        setSwitchState(!enabled);
    };

    // useEffect(() => {
    //     console.log('EFFECT HOOK WORKS HOLEY SHEEEET')
    // }, [enabled])

    return <Switch onChange={switchTrigger} onColor={onColor} uncheckedIcon={false} checkedIcon={false} checked={!!enabled} disabled={disabled}/>;
}