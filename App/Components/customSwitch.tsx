import React, {useState, useEffect} from 'react';
import Switch from 'react-switch';
import followLink from './Config/followLink';
import {stringKeyArray} from './Config/types';

interface CustomSwitchProps {
    value: boolean;
    disabled?: boolean;
    onColor?: string;
    photoID?: string;
    compilationID?: string;
    userID?: string;
    adminAction?: string;
    rerenderCallback?(): void
}

export default function CustomSwitch(props: CustomSwitchProps) {
    const [enabled, setSwitchState] = useState(props.value);
    const [renderCounter, setRenderCounter] = useState(0);

    let disabled = false;
    if (('undefined' !== typeof props.disabled) && props.disabled) {
        disabled = true;
    }

    let onColor = '#ff8f81';
    if ('undefined' !== typeof props.onColor) {
        onColor = props.onColor;
    }

    const apiUrls: stringKeyArray = {
        'removeCompilationItem': '/api/removeCompilationItem?photoID=' + props.photoID + '&compilationID=' + props.compilationID,
        'hidePhoto': '/api/hidePhoto?photoID=' + props.photoID + '&enabled=' + enabled,
        'makeExhibit': '/api/makeExhibit?compilationID=' + props.compilationID + '&enabled=' + enabled,
        'hide': '/api/hideCompilation?compilationID=' + props.compilationID + '&enabled=' + enabled,
        'hideProfile': '/api/hideProfile?userID=' + props.userID + '&enabled=' + enabled,
        'hideBio': '/api/hideBio?userID=' + props.userID + '&enabled=' + enabled,
        'hideAvatar': '/api/hideAvatar?userID=' + props.userID + '&enabled=' + enabled,
    }

    const handleChange = () => {
        setSwitchState(!enabled);
    };

    useEffect(() => {
        setRenderCounter(renderCounter + 1);
        if (1 <= renderCounter) {
            let adminAction: string = props.adminAction;
            if ('undefined' !== typeof props.photoID) {
                if ('undefined' !== typeof props.compilationID) {
                    adminAction = 'removeCompilationItem';
                } else {
                    adminAction = 'hidePhoto';
                }
            }
            const apiUrl: string = apiUrls[adminAction];
            followLink(apiUrl).then(() => {
                if ('makeExhibit' === props.adminAction) {
                    props.rerenderCallback();
                }
            });
        }
    }, [enabled])

    return <Switch onChange={handleChange} onColor={onColor} uncheckedIcon={false} checkedIcon={false}
                   checked={!!enabled} disabled={disabled}/>;
}