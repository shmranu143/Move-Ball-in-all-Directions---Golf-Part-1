import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyDown=this.handleKeyDown.bind(this)
    };

    buttonClickHandler() {
        this.setState({renderBall:true})
   
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }

    // bind ArrowRight keydown event
    handleKeyDown(e){
        if(e.keyCode ===39){
            this.setState((prevState)=>{
                return {
                    ballPosition:{
                        left:parseInt(prevState.ballPosition.left,10)+5+"px"
                
                    }
                }
            })
        }
    }
    componentDidMount() {
        document.addEventListener('keydown',this.handleKeyDown);
        
      
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
