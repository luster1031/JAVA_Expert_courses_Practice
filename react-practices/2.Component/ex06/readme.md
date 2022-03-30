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
    2. src/01 참고
        ```js
        let state = {
            order : JSON.parse(fs.readFileSync('./json/data.json').toString()) //  readfile : 비동기 | readFileSync : 비동기
        }

        console.log(state);
        ```
        ![image](https://user-images.githubusercontent.com/61460836/160732960-ad925e9b-c216-4da2-a33f-987530c51c18.png)

        

2. How II
    1. Object.assign 을 이용해 변경이 적용된 객체를 새로 생성하는 방법 -> src/02
    2. src/02 참고
    + Object.asssign은 깊은 복사가 이뤄지지 않음
    