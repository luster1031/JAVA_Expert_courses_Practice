import React, { Component } from 'react';

export default class extends Component {
    constructor() {
        super(...arguments);    //  배열 분해
        this.state = {  //  상태 객체 만듦
            step: this.props.step,
            val: this.props.begin
        }
    }

    onClickButton(e){
        this.setState({
            val : this.state.val + this.props.step
        });
    }
    render() {
        return (
            <div>
                <button onClick={this.onClickButton.bind(this)}>
                {/*                     
                <button onClick={(e) => {
                    this.setState({
                        val: this.state.val + this.state.step
                    })
                }}> 
                */}
                    <strong>+</strong>
                </button>
                {' '}
                <span>{this.state.val}</span>
            </div>
        );
    }
}