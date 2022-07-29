import React, {useState, useEffect} from 'react';
import TextAreaAutosize from 'react-textarea-autosize';
import axios from "axios";

export default function CustomInput(props) {
    const [currentValue, setCurrentValue] = useState(props.value);
    const [lastSentValue, setLastSentValue] = useState(props.value);

    const handleChange = (event) => {
        console.log('%cChange the state:', 'color: green');
        console.log(event.target.value);
        setCurrentValue(event.target.value);
    }

    async function sendToServer(value) {
        let apiUrl = '';
        switch (props.adminAction) {
            case 'changeName':
                apiUrl = '/api/changeName?compilationID=' + props.compilationID + '&value=' + value;
                break;
            case 'changeDesc':
                apiUrl = '/api/changeDesc?compilationID=' + props.compilationID + '&value=' + value;
                break;
        }
        await axios
            .get(apiUrl)
            .then((response) => {
                console.log('API pinged');
            });
    }

    const handleBlur = () => {
        if (currentValue !== lastSentValue) {
            console.log('%cSend to server:', 'color: green');
            console.log(currentValue);
            sendToServer(currentValue);
            setLastSentValue(currentValue);
        } else {
            console.log('%cData was not changed, no need to ping server:', 'color: green');
        }
    }

    return <TextAreaAutosize onChange={handleChange} onBlur={handleBlur} defaultValue={props.value}/>;
}