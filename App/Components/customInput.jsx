import React, {useEffect} from 'react';

export default function CustomInput(props) {
    return <textarea>{props.value}</textarea>;
}