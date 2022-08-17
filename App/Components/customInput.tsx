import React, {useState} from 'react';
import TextAreaAutosize from 'react-textarea-autosize';
import followLink from './Config/followLink';

interface CustomInputProps {
    value: string,
    adminAction: string,
    compilationID: string
}

export default function CustomInput(props: CustomInputProps) {
    const [currentValue, setCurrentValue] = useState(props.value);
    const [lastSentValue, setLastSentValue] = useState(props.value);

    const handleChange = (event: React.SyntheticEvent) => {
        setCurrentValue((event.target as HTMLInputElement).value);
    }

    async function sendToServer(value: string) {
        let apiUrl = '';
        switch (props.adminAction) {
            case 'changeName':
                apiUrl = '/api/changeName?compilationID=' + props.compilationID + '&value=' + value;
                break;
            case 'changeDesc':
                apiUrl = '/api/changeDesc?compilationID=' + props.compilationID + '&value=' + value;
                break;
        }
        await followLink(apiUrl);
    }

    const handleBlur = () => {
        if (currentValue !== lastSentValue) {
            sendToServer(currentValue).then(() => {setLastSentValue(currentValue);});
        }
    }

    return <TextAreaAutosize onChange={handleChange} onBlur={handleBlur} defaultValue={props.value}/>;
}