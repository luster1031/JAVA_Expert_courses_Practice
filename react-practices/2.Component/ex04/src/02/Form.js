import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './assets/Form.css';

export default function Form() {
    const [name, setName] = useState("");       //  제어 컴포넌트
    const [email, setEmail] = useState("");     //  제어 컴포넌트
    const [passwd, setPasswd] = useState("");   //  제어 컴포넌트
    const [gender, setGender] = useState("female");
    const [validEmail, setValidEmail] = useState(false);    //  UI용
    const [birthYear, setBirthYear] = useState("1990");
    const [descriptoin, setDescription] = useState("");
    const [agreeProv, setAgreeProv] = useState('no');
    const onChangeInputName = function (e) {
        //  10자 제한
        setName(e.target.value.substr(0, 10));
    }
    const onChangeInputEmail = function (e) {
        setEmail(e.target.value);

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        setValidEmail(re.test(e.target.value));
    }
    const onChangeInputGender = function (e) {
        setGender(e.target.value);
    }
    const onChangeInputAgreeProv = function (e) {
        console.log(e.target.value);
        // if(e.target.value === 'no'){
        //     setAgreeProv('yes');
        // }
        // if(e.target.value === 'yes'){
        //     setAgreeProv('no');
        // }
        const state = e.target.value === 'no' ? 'yes' : 'no';


        // API 호출
        // const url = `/prov/agree?status=${state}`;
        // console.log(url);

        //  통신해서 응답오면 result가지고
        // result = await fetch(url);
        // if (true) {
            setAgreeProv(state);
        // }
    }
    return (
        <form id="joinForm" name="joinForm" method="post" action="/do/not/post">
            <label htmlFor="name">이름</label>
            <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={onChangeInputName} />

            <label htmlFor="email">이메일</label>
            <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={onChangeInputEmail} />
            {
                email === '' ?
                    null
                    : (
                        validEmail ?
                            <FontAwesomeIcon icon={faCheckCircle} style={{ marginLeft: 5, fontSize: 16, color: 'blue' }} />
                            : <FontAwesomeIcon icon={faTimesCircle} style={{ marginLeft: 5, fontSize: 16, color: 'red' }} />
                    )

            }
            <label htmlFor="password">패스워드</label>
            <input
                id="password"
                name="password"
                type="password"
                value={passwd}
                onChange={e => setPasswd(e.target.value)} />

            <fieldset>
                <legend>성별</legend>
                <label>여</label>
                <input
                    type="radio"
                    name="gender"
                    value={"female"}
                    defaultChecked={true}
                    checked={gender === "female"}
                    onChange={onChangeInputGender}
                />
                <label>남</label>
                <input
                    type="radio"
                    name="gender"
                    value={"male"}
                    defaultChecked={false}
                    checked={gender === "male"}
                    onChange={onChangeInputGender}
                />
            </fieldset>

            <label htmlFor="birthYear">생년</label>
            <select
                id="birthYear"
                value={birthYear}
                onChange={e => setBirthYear(e.target.value)}>
                <option value='1984'>1984년</option>
                <option value='1985'>1985년</option>
                <option value='1986'>1986년</option>
                <option value='1987'>1987년</option>
                <option value='1988'>1988년</option>
                <option value='1989'>1989년</option>
                <option value='1990'>1990년</option>
            </select>

            <label htmlFor="birthYear">자기소개</label>
            <textarea value={descriptoin}
                onChange={e => setDescription(e.target.value)} />

            <fieldset>
                <legend>약관동의</legend>
                <input
                    id="agree-prov"
                    type="checkbox"
                    name="agreeProv"
                    value={agreeProv}
                    checked={agreeProv === 'yes'}
                    onChange={onChangeInputAgreeProv}
                />
                <label>서비스 약관에 동의합니다.</label>
            </fieldset>

            <input type="submit" value="가입" />
        </form>
    );
}