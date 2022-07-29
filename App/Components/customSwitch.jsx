import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';
import axios from "axios";

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

    async function pingApi(apiUrl) {
        await axios
            .get(apiUrl)
            .then((response) => {
                console.log('API pinged');
            });
    }

    useEffect(() => {
        setRenderCounter(renderCounter + 1);
        if (1 <= renderCounter) {
            let apiUrl = '';
            if ('undefined' !== typeof props.photoID) {
                apiUrl = '/api/hidePhoto?photoID=' + props.photoID + '&enabled=' + enabled;
            } else if ('undefined' !== typeof props.compilationID && 'undefined' !== typeof props.adminAction) {
                switch (props.adminAction) {
                    case 'makeExhibit':
                        apiUrl = '/api/makeExhibit?compilationID=' + props.compilationID + '&enabled=' + enabled;
                        break;
                    case 'hide':
                        apiUrl = '/api/hideCompilation?compilationID=' + props.compilationID + '&enabled=' + enabled;
                        break;
                }
            } else if ('undefined' !== typeof props.userID && 'undefined' !== typeof props.adminAction)
                switch (props.adminAction) {
                    case 'hideProfile':
                        apiUrl = '/api/hideProfile?userID=' + props.userID + '&enabled=' + enabled;
                        break;
                    case 'hideBio':
                        apiUrl = '/api/hideBio?userID=' + props.userID + '&enabled=' + enabled;
                        break;
                    case 'hideAvatar':
                        apiUrl = '/api/hideAvatar?userID=' + props.userID + '&enabled=' + enabled;
                        break;
                }
            console.log('Go to ' + apiUrl);
            pingApi(apiUrl);
        }
    }, [enabled])

    return <Switch onChange={switchTrigger} onColor={onColor} uncheckedIcon={false} checkedIcon={false}
                   checked={!!enabled} disabled={disabled}/>;
}