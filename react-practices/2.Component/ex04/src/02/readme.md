# 제어 컴포넌트
<br>

![image](https://user-images.githubusercontent.com/61460836/158731432-1c815ce3-9c3d-489a-965e-36c406ca9f5d.png)

<br>

----------

+ 사용자 입력을 상태로 제어
+ 사용자의 입력을 저장하기 전에 제어하는 것
    + 숫자인지, 한글인지...
+ 상태를 출력하는 제어 컨포넌트가 되어야 함


+ 이름 : 상태와 연결되어서 (제어)
    ```js
    const [name, setName] = useState("");
    const onChangeInputName = function(e){
        setName(e.target.value); //  다시 그림
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

    ```
    + 10자 제어
        + setName상태 변화하기 전에 
            `setName(e.target.value.substr(0,10));`
+ 이메일 제어 만들기
    ```bash
    $ npm i @fortawesome/fontawesome-svg-core
    $ npm i @fortawesome/react-fontawesome
    $ npm i @fortawesome/free-solid-svg-icons
    $ npm i @fortawesome/free-regular-svg-icons
    $ npm i @fortawesome/free-brands-svg-icons
    ```
    ```js
    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
    ...
    ...
    ...
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    
    const onChangeInputEmail = function (e) {
        setEmail(e.target.value);

        const re = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/g;
        setValidEmail(re.test(e.target.value));
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
                        <FontAwesomeIcon icon={faCheckCircle} style={{fontSize:16, color:'blue'}} /> 
                        : <FontAwesomeIcon icon={faTimesCircle} style={{fontSize:16, color:'red'}}/>
                    )
                
            }
    ```
    + 추가

        ![image](https://user-images.githubusercontent.com/61460836/158733752-109d8c36-4eec-463f-8605-67ce23f928da.png)
        ![image](https://user-images.githubusercontent.com/61460836/158734054-b10e12f1-51bf-4c77-95f9-612ca0f287d1.png)

