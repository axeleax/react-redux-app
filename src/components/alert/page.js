import React from 'react';
import Alert from 'react-bootstrap/Alert';
import { IoIosWarning } from "react-icons/io";
import './style.css';

export default function Page(props) {

    const {
        isVisible, 
        data,
    } = props;

    return (
        isVisible &&
            <Alert variant={data.type} transition={true} className={'alert-control'}>
            <Alert.Heading><div>
                <h1 className={'alert-simbol'}><IoIosWarning /></h1>
                <h3 className='alert-code'>{data.code}</h3>
                <div className='alert-title'>{data.title}</div>
            </div></Alert.Heading>
                <p className={'alert-message'}>
                    {data.message}
                </p>
            </Alert>
    );
}




