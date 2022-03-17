# Event Handler에서 'ref'사용하기 : Class Component
```js
 onScroll(event){
    console.log(outterRef.current.clientHeight, ' : ', outterRef.current.scrollTop, ' : ', innerRef.current.clientHeight);
}
render() {
    return (
        <div
            ref={outterRef}
            className={'App'}
            onScroll={this.onScroll}>
            <div>
                <ul>
                    {
                        Array.from({ length: 100 }, (_, i) => i + 1).map(e =>
                        <li key={e}>
                            {`아이템 ${e} 입니다.`}
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}
```
+ onScroll에서 this를 쓰면 이 component것이 아님
    ```js
    /*
    constructor(){
        this.outterRef =null;
    }
    // 자바 스크립트는 이렇게 안 해줘도 됨
    */
    onScroll(event){
        console.log(this.outterRef.clientHeight, ' : ', this.outterRef.scrollTop, ' : ', this.innerRef.clientHeight);
    }
    render() {
        return (
            <div
                ref={function(ref){
                    this.outterRef = ref;
                }}
                className={'App'}
                onScroll={this.onScroll.bind(this)}>
                <div
                    ref={ref=> this.innerRef = ref}>
                    <ul>
                        {
                            Array.from({ length: 100 }, (_, i) => i + 1).map(e =>
                            <li key={e}>
                                {`아이템 ${e} 입니다.`}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        );
    }
    ```
    + 
