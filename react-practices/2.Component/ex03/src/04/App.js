import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    //const imageRef = useRef(null);
    const onKeyPressInput = e => {
        if(e.key === 'Enter'){
            console.log(e.target.value);
        }
    }
    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput } />
                <br/>
                <br/>
            <img
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }/>
        </Fragment>
    );
}