import React, { useState, useEffect } from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    const [session, setSession] = useState();
    const [ticks, setTicks] = useState(0);

    //  
    useEffect(() => {
        console.log("date바뀜");
        console.log(hours + ' ' + minutes + ' ' + seconds + ' ' + session + ' ' + ticks);
    }, [seconds]);

    function update(){
        const date = new Date();
        const hour = date.getHours();
        console.log(date.getSeconds());

        setHours(('0' + (hour == 0 ? 12 : (hour > 12 ? hour - 12 : hour))).slice(-2));
        setMinutes(('0' + date.getMinutes()).slice(-2));
        setSeconds(('0' + date.getSeconds()).slice(-2));
        setSession(hour > 12 ? 'am' : 'pm');
        setTicks(ticks != 0 ? ticks + 1 : 0);
        console.log("getcurrentclockTime");
    }
    
  

    useEffect(() => {
        let interval = setInterval(function () {
            update();
        }, 1000);
        return (function () {
            console.log('After Unmount(componentWillUnmount)');
            clearInterval(interval);
        });
    }, []);

    return (
        <div className='clock-display'>
            <h2>ex05 - Component LifeCycle Practice</h2>
            {
                
                    <Clock
                        message={'ex05: useEffect Hook example'}
                        hours={hours}
                        minutes={minutes}
                        seconds={seconds}
                        session={session}
                        ticks={ticks} />
            }
        </div>
    );
}