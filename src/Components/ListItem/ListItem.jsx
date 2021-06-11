import { Component } from "react";
import Button from "../Button/Button";
import "./Styles.css"

export default class ListItem extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <section className="list-item">
                <span className="task-title">
                    {this.props.text}
                </span>
                <Button
                    text="Delete"
                    isPurble={true}
                    handleClick={this.props.handleDelete}
                />

            </section>
        )
    }
}