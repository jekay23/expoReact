import React, {useState} from 'react';
import TextAreaAutosize from 'react-textarea-autosize';
import axios from "axios";

export default function CustomInput(props) {
    const [currentValue, setCurrentValue] = useState(props.value);
    const [lastSentValue, setLastSentValue] = useState(props.value);

    const handleChange = (event) => {
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
            .get(apiUrl);
    }

    const handleBlur = () => {
        if (currentValue !== lastSentValue) {
            sendToServer(currentValue);
            setLastSentValue(currentValue);
        } else {
        }
    }

    return <TextAreaAutosize onChange={handleChange} onBlur={handleBlur} defaultValue={props.value}/>;
}