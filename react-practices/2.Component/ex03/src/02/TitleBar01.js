import React, { Component } from 'react'

class TitleBar01 extends Component {
    constructor(){
        super(...arguments);    //  객체 분해
        //  this.no(인스턴스 변수) VS this.state.no
        //this.no = 0;
        
        //  초기값 설정
        this.state = ({
                no : 0
            
        })
    }
    onClickHandeler(){
        //  this.no(인스턴스 변수) VS this.state.no
        
        //this.no++;
        //console.log(`TitleBar Clicked! ${this.no}`);


        this.setState({
            no : this.state.no + 1
        });
        console.log(`TitleBar Clicked! ${this.state.no}`);
    }
    render() {
        return (
            <h1
                style={{cursor:'pointer'}}
                onClick={this.onClickHandeler.bind(this)}>
                ex03 : Functional Event Handler(Class Component)
                <br/>{
                    this.state.no
                }
                </h1>
        );
    }
}

export default TitleBar01