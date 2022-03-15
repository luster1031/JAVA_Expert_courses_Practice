# 02 : Function Handler
1. Class Component
    + this보장 못 함
        ```js 
        onClick={this.onClickHandeler.bind(this)}>
        ```
    + 객체 분해
        ```js
        super(...arguments);
        ```
    + 초깃값 설정
        ```js
        this.State = ({
                no : 0
        })
        ```
    + setStatue를 통해서 render를 부름
        + 상태를 변경된다.
            ```js
            this.setState({
                no : this.state.no + 1
            });
            ```
        + 바로 바꾸면 renderling 되지 않음
            ```js
            this.state.no = this.state.no + 1
            ```
   ![image](https://user-images.githubusercontent.com/61460836/158296767-4f842edc-bdf2-4676-91cc-8f2a21341c4a.png)     
    + 버튼 누르면 ```h1```의 숫자가 바뀜
2. Functional Component
    + this 가 없음
    ![image](https://user-images.githubusercontent.com/61460836/158296838-838b7eaa-31af-48bc-af24-e31f3803be3a.png)