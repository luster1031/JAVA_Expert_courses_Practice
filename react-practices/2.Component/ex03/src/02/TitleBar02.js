import React from 'react'

const TitleBar02 = () => {
    //  render를 부를 때마다 계속 생성
    const onClickHandler = e => {
        console.log('TitleBar02 Clicked!');
    }

    return (
        <h1
            style={{ cursor: 'pointer' }}
            onClick={onClickHandler}>
            ex03 : Functional Event Handler(Functional Component)
        </h1>
    );

}

export default TitleBar02