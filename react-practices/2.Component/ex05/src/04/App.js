import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const update = () => {
        const date = new Date();
        const hours = date.getHours();

        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2)
            , minutes: ('0' + date.getMinutes()).slice(-2)
            , seconds: ('0' + date.getSeconds()).slice(-2)
            , session: hours > 12 ? 'am' : 'pm'
        };
    }

    const [currentClockTime, setcurrentClockTime] = useState(update());
    const [ticks, setTicks] = useState(0);

    //  ticks가 1에서 안 바뀜
    // useEffect(() => {
    //     setInterval(() => {
    //         setcurrentClockTime(update());
    //         setTicks(ticks+1);
    //     }, 1000);
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            setcurrentClockTime(update());
            setTicks(ticks + 1);
            console.log(ticks);
        }, 1000);
    }, [currentClockTime]);

    return (
        <div className='clock-display'>
            <h2>ex05 - Component LifeCycle Practice</h2>
            {
                ticks % 10 == 0 ?
                    null :
                    <Clock
                        message={'ex05: useEffect Hook example'}
                        hours={currentClockTime.hours}
                        minutes={currentClockTime.minutes}
                        seconds={currentClockTime.seconds}
                        session={currentClockTime.session}
                        ticks={currentClockTime.ticks} />
            }
        </div>
    );
}