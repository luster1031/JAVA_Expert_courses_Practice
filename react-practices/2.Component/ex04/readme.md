# ex04 : State 
### 1. 기본 개념
1. state
    + 컴포넌트 내부의 형재 상태를 나타내는 쓰기 가능한 데이터
    + 컴포넌트는 this.state 안에 에러 데이터(상태)를 가질 수 있다. 
    + this.state는 특정 컴포넌트 전용이다.
    + 상태가 변경이 되면 컴포넌트 반응형 (Reactive) Rendering이 트리거되고 컴포넌트와 자식 컴포넌트가 다시 renderling된다. 
    + 컴포넌트의 동작(evnet)와 상호작용을 수행할 수 있는 매커니즘을 제공한다.
    + 클래스 컴포넌트에서는 constructor에서 초기화를 한다. 
    + 클래스 컴포넌트에서 상태 변경을 위해서는 setState함수를 사용 (Class Component)
    + 함수 컴포넌트에서는 useState 후크 함수 사용해서 초기화를 한다. 
    + 함수 컴포넌트에서 상태 변경을 위해 useState 후크 함수에서 반환된 배열의 두번째 배열 요소를 사용한다.
        ```const [val, setVal] = useState(begin)```
### 2. 제어 컴포넌트
+ src/02 제어 컴포넌트
+ src/03 비제어 컴포넌트
### 3. 상태(stateful) 컴포넌트 vs 순수(Pure, Dumb) 컴포넌트
+ emaillist
### 4. DataFlow(Bottom -> Up)
+ emaillist 
+ 