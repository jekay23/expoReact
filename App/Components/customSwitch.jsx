import React, {useEffect} from 'react';
import Switch from 'react-switch';

export default function CustomSwitch(props) {
    const [enabled, setSwitchState] = React.useState(props.value);
    useEffect(() => {
        console.log('EFFECT HOOK WORKS HOLEY SHEEEET')
    }, [enabled])

    return <CustomSwitch checked={enabled}/>;
}
// onChange={}
// TODO: this shit seems to need hooks. Fuck me ey...
