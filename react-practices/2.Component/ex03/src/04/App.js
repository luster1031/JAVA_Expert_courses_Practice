import React, {Fragment, useRef} from 'react';
import logo from '../assets/images/react-logo.png';

export default function App() {
    const imageRef = useRef(null);
    const onKeyPressInput = e => {
        if(e.key === 'Enter'){
            console.log(e.target.value);
        }
    }
    const onFocusInput = e => console.log('focuesd');
    const onBlurInput = e => console.log('blur');
    const onMouseOverImage = e => console.log('mouseover', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseOutImage = e => console.log('mouseout', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseMoveImage = e => {
        const offsetTop = imageRef.current.offsetTop;
        const offsetLeft = imageRef.current.offsetLeft;
        console.log('mousemove', `x=${e.clientX-offsetLeft}, y=${e.clientY-offsetTop}`);}

    const onMouseDownImage = e => console.log('mouseDOWN', `x=${e.clientX}, y=${e.clientY}`);
    const onMouseUpImage = e => console.log('mouseUP', `x=${e.clientX}, y=${e.clientY}`);
    const onClick = e => console.log('click', `x=${e.clientX}, y=${e.clientY}`);
    const onDoubleClick = e => console.log('dblclick', `x=${e.clientX}, y=${e.clientY}`);
    
    
    return (
        <Fragment>
            <h2>ex03 - Some Examples of Event Handler</h2>
            <input
                type='text'
                placeholder='메세지를 입력 하세요'
                onKeyPress={ onKeyPressInput }
                onFocus={onFocusInput}
                onBlur={onBlurInput} />
                
                <br/>
                <br/>
            <img
                ref={imageRef}  //  진짜 dom 접근
                style={ {
                    cursor: 'pointer',
                    width: 190,
                    border: '1px solid #ccc'
                } }
                src={ logo }
                onMouseOver={onMouseOverImage}
                onMouseOut={onMouseOutImage}
                onMouseMove={onMouseMoveImage}
                
                onMouseDown={onMouseDownImage}
                onMouseUp={onMouseUpImage}
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                />
        </Fragment>
    );
}