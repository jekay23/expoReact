import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';

export default function CustomSwitch(props) {
    const [enabled, setSwitchState] = useState(props.value);
    const [renderCounter, setRenderCounter] = useState(0);

    let disabled = false;
    if ('undefined' !== typeof props.disabled && props.disabled) {
        disabled = true;
    }

    let onColor = '#ff8f81';
    if ('undefined' !== typeof props.onColor) {
        onColor = props.onColor;
    }

    const switchTrigger = () => {
        setSwitchState(!enabled);
    };

    useEffect(() => {
        setRenderCounter(renderCounter + 1);
        if (1 <= renderCounter) {
            if ('undefined' !== typeof props.photoID) {
                console.log('go to /api/hidePhoto?photoID=' + props.photoID + '&enabled=' + enabled);
            } else if ('undefined' !== typeof props.compilationID && 'undefined' !== typeof props.adminAction) {
                switch (props.adminAction) {
                    case 'makeExhibit':
                        console.log('go to /api/makeExhibit?compilationID=' + props.compilationID + '&enabled=' + enabled);
                        break;
                    case 'hide':
                        console.log('go to /api/hideCompilation?compilationID=' + props.compilationID + '&enabled=' + enabled);
                        break;
                }
            } else if ('undefined' !== typeof props.userID && 'undefined' !== typeof props.adminAction)
                switch (props.adminAction) {
                    case 'hideProfile':
                        console.log('go to /api/hideProfile?userID=' + props.userID + '&enabled=' + enabled);
                        break;
                    case 'hideBio':
                        console.log('go to /api/hideBio?userID=' + props.userID + '&enabled=' + enabled);
                        break;
                    case 'hideAvatar':
                        console.log('go to /api/hideAvatar?userID=' + props.userID + '&enabled=' + enabled);
                        break;
            }
        }
    }, [enabled])

    return <Switch onChange={switchTrigger} onColor={onColor} uncheckedIcon={false} checkedIcon={false}
                   checked={!!enabled} disabled={disabled}/>;
}