import { Component } from "react";
import "./Styles.css"

export default class Button extends Component {
    render() { 
        return (
            <button 
                className={this.props.isPurble?
                "btn backgrounded-button"
                :
                "btn"
            }
                onClick={this.props.handleClick}>
                {this.props.text}
            </button>
                
            
        ) 
    }
}