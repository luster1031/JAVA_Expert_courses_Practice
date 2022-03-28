import React, { useRef } from 'react'
import style from './assets/scss/RegisterFom.scss'
const RegisterFom = ({ callback }) => {
    const refForm = useRef(null);
    return (
        <form
            ref={refForm}
            className={style.RegisterForm}
            onSubmit={function (e) {

                e.preventDefault(); //  페이지 이동 막기
                try {


                    // [{n:'firstName', v:'마'}, {}, {}]
                    //  어느 from 이든 다 사용 가능
                    const newEmail = Array.from(e.target, input => {
                        //  simple validation
                        if (input.value === '') {
                            throw new Error(`${input.placeholder}이 비어 있습니다. `)
                        }
                        return { n: input.name, v: input.value }
                    })
                        .filter(({ n }) => n !== '')
                        .reduce((res, /*o*/{ n, v }) => {
                            // res[o.n] = o.v;
                            res[n] = v;
                            return res;
                        }, {}/* 초기값 설정 : res는 뒤의 {}, o는 배열 */);

                    // const newEmail = {
                    //     firstName:e.target.firstName.value, 
                    //     lastName:e.target.lastName.value, 
                    //     email:e.target.email.value
                    // };    //  emailvo랑 value 이름이 같아야 함



                    refForm.current.reset();
                    callback(newEmail);
                } catch (err) {
                    console.log(err.message);
                }
            }}>
            <input type={'text'} name={'firstName'} placeholder={"성"} className={style.InputFirstName} />
            <input type={'text'} name={'lastName'} placeholder={"이름"} className={style.InputLastName} />
            <input type={'text'} name={'email'} placeholder={"이메일"} className={style.InputEmail} />
            <input type={'submit'} value={'등록'} />
        </form>

    )
}

export default RegisterFom