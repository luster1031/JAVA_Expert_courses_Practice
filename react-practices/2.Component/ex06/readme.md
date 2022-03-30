## 1. immutability : 컴포넌트 상태의 불변성
1. 절대로 컴포넌트의 상태를 직접 조작하지 마라.
2. 컴포넌트 상태를 불변으로 다루어라.
3. setState이나 useState에서 반환해주는 함수를 사용해서 상태를 조작할 것


## 2. Violation Example : Class Component 
```js
this.stae.emails = [{}, {}, {}];
let emails = this.state.emails;
emails.push({});
```
+ 이렇게 하지 마라. 

## 3. 상태를 불변성으로 유지해야 하는 이유
1. this.state를 직접 조작하는 것은 React 상태 관리를 우회하는 것 -> 안돼!
    + 리액트 프로그래밍 모델에 반하는 것
2. 성능 개선의 여지가 없어진다. 
    + 객체의 변경 유무를 검사할 때 -> 
        + 객체의 **동질성** 비교는 고비율 (내용이 같냐 안 같냐 비교 안 좋음)
        + **동일성** 비교는 저비용(object === object2) (같냐 안 같냐)
3. 결론은 변경된 부분을 바꾸지 말고 대체하면 된다. 

<br>
<br>

## 프로그래밍 방식
1. How I
    1. 비파괴 배열 메소드 및 연산자 : map, reduce, concat, filter, ...(ES6 spread 연산자 활용)
    2. [src/01 참고](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/react-practices/2.Component/ex06/01.js)
        ```js
        let state = {
            order : JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
        }

        console.log(state);
        ```
        ![image](https://user-images.githubusercontent.com/61460836/160732960-ad925e9b-c216-4da2-a33f-987530c51c18.png)

        

2. How II
    1. Object.assign 을 이용해 변경이 적용된 객체를 새로 생성하는 방법 -> src/02
    2. [src/02 참고](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/react-practices/2.Component/ex06/02.js)
    + Object.asssign은 깊은 복사가 이뤄지지 않음 -> 1 depth만
### How III:
1. I, II는 Nest Object 가 있는 경우 까다롭다.
   - Object.assign은 deep copy 지원 안함.
   - deep clone을 뜨는 방법은 비용이 비싸다.
   - 직접 하는 방법은 관리가 어렵고 코드에 실수가 있을 가능 성 많음.
2. 이는 자바스크립트가 원래 저 따위이기 때문에 어쩔 수 없다.
3. [src/03 참고](https://github.com/luster1031/JAVA_Expert_courses_Practice/blob/master/react-practices/2.Component/ex06/03.js)


### How IV:
1. React Addon에 복잡하고 중첩된 객체의 변경을 도와주는 immutablity helper 함수를 사용하는 것이다.
2. add-on 설치
```bash
$ npm i react-addons-update
```

3. 적용
```javascript
import update from 'react-addons-update';

const newObject = update(objectInState, { [WHERE] : { [WHAT]: updateValue } });
```

4. 업데이트 형식
   - 속성 변경       $set
   - 배열 요소 추가   $push
   - 배열 요소 변경   $set

5. WHAT 명령
   - $push      * -> 배열
   - $splice
   - $unsift
   - $set       * -> update
   - $merge
   - $apply

6. src/04 참고