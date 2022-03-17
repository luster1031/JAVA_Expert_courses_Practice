# 기본 개념
![image](https://user-images.githubusercontent.com/61460836/158723962-3b79f8e3-0255-4d26-ac6c-65c8865298c6.png)

<br>

1. Incrementor01
    + setState
        ```js
        <div>
            <button onClick={this.onClickButton.bind(this)}>
                        
            <button onClick={(e) => {
                this.setState({
                    val: this.state.val + this.state.step
                })
            }}> 
                <strong>+</strong>
            </button>
            {' '}
            <span>{this.state.val}</span>
        </div>
        ```
        + 그냥 호출하면 변경이 안 되고, setState해야 render를 호출해서 변경이 됨
    + **render를 코드에서 부르면 안됨**
        ```js
        onClickButton(e){
            this.setState({
                val : this.state.val + this.props.step
            });
        }
        render() {
            return (
                <div>
                    <button onClick={this.onClickButton.bind(this)}>
                        <strong>+</strong>
                    </button>
                    {' '}
                    <span>{this.state.val}</span>
                </div>
            );
        }
        ```
        + bind(this)해줘야 함
    + useState가 있으면 react가 state 만듦
    + 함수형을 만들어서 아예 render의 접근을 차단함
2. Incrementor02
    + 리액트 잘 몰라도 사용 가능
    + `useState()` : 리액트가 컴포넌트 만들고 state함수 셋팅
    + `const [val, setVal] = useState(begin); //  상태 초기값`
        + 읽을 땐, val라고 읽고 (val에 상태값 저장 됨 )
        + setVal : 변경할 수 있는 함수
        + render가 호출 할 수 있도록 state를 react가 만듦
        + 분해 하지 않으면, `r[1]`이렇게 적어야함
    + setVal(val+step)
        ```js
        this.setval({☆})
            this.val = ☆
        ```
        + react가 자동으로 setState해줌
        