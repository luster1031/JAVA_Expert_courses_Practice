import React, { useRef } from 'react';
import './assets/scss/App.scss';

export default function App() {
    const outterRef = useRef(null);
    const innerRef = useRef(null);

    /**
     * const result = Array.from({length:100},function(e, i){
        return i+1;
    });
     */
    const result = Array.from({length:100},(_, i) => i + 1);
    console.log(result);
    return (
        <div
            ref={outterRef}
            className={'App'}
            onScroll={e =>  console.log(outterRef.current.clientHeight,' : ', outterRef.current.scrollTop,' : ', innerRef.current.clientHeight)
            }>
            <div
                ref={innerRef}>
                <ul>
                    {Array.from({ length: 100 }, (_, i) => i + 1).map(e =>
                    //{Array.from({ length: 100 }, (_, i) => i + 1).map(i =>
                        <li key={e}>
                            {`아이템 ${e} 입니다.`}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}