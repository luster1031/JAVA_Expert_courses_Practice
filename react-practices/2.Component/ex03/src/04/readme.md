# Event Handler 예제들

![image](https://user-images.githubusercontent.com/61460836/158500243-71131070-e25c-42a6-8a99-aca9901d6efe.png)

+ onKeyPressInput
    ```js
    const onKeyPressInput = e => {
            if(e.key === 'Enter'){
                console.log(e.target.value);
            }
        }
    ```
    + text입력하고 enter누르면 console창에 뜸
        ![image](https://user-images.githubusercontent.com/61460836/158500325-530d2b1a-d7c5-4a8b-8a08-0e7053a121bd.png)
+ onFocus, onBlur
    + 위에 클릭했을 때, 다른 곳 클릭했을 때
+ onMouseOver
    + 어떤 곳 위에 마우스를 가져다 놓았을 때
        + 특정 image 위의 위치는 알 수가 없다. -> react에서 지원 안 해줌
            + element의 option?을 구해야함 : 얼만큼 떨어져있는지
        
        1. 특정 dom 선택. 
            ```const imageRef = useRef(null);```
        2. 진짜 dom 접근
            ```ref={imageRef}```
            + ref객체의 .current값은 원하는 DOM을 가르킴
        3. current함수 사용
            ```js
            const onMouseOutImage = e => console.log('mouseout', `x=${e.clientX}, y=${e.clientY}`);
            const onMouseMoveImage = e => {
                const offsetTop = imageRef.current.offsetTop;
                const offsetLeft = imageRef.current.offsetLeft;
                console.log('mousemove', `x=${e.clientX-offsetLeft}, y=${e.clientY-offsetTop}`);
            }

            ```

+ onMouseOut
    + 마우스를 가져다가 나갔을 때

+ onMouseMove
    + 움직일 때

+ onMouseDown
+ onMouseUp
+ onClick
+ onDoubleClick

