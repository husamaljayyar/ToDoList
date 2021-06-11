import './Styles.css'
import { Component } from 'react'
import Button from '../../Components/Button/Button'
import ListItem from '../../Components/ListItem/ListItem'
import { v4 as uuidv4 } from 'uuid'; // unique id 
import axios from 'axios'; // library fetch data

export class HoomScreen extends Component {
    constructor() {
        super()
    }
    state = {
        value: '',
        list: [],  // fetch data from api data in array

    }
    // target from code in inside componentDidMount get data
    // componentDidMount => one work after render 
    // componentDidMount => support async
    // await => await and fetch result
    // this =>  fetch result
    async componentDidMount() {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            // setState => edite state
            this.setState({
                list: response.data
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="inner-container">
                <h1 className="page-title">To Do List</h1>
                <section className="input-section">
                    <div className="input-span_eror">
                        <input
                            className="add-task-input"
                            type="text"
                            placeholder="Enter a new Task..."
                            autoComplete="off"
                            id="text"
                            name="text"
                            onChange={(e) => {
                                this.setState({
                                    value: e.target.value
                                })
                            }}
                            value={this.state.value}
                        />
                        {this.state.error ?
                            <span>
                                {this.state.error}
                            </span> : null}

                    </div>
                    <Button
                        text="Add"
                        handleClick={() => {
                            if (this.state.value) {// Do you contains on data in state
                                const newArr = [
                                    {
                                        title: this.state.value,
                                        id: uuidv4()
                                    },
                                    ...this.state.list
                                ]
                                this.setState({
                                    list: newArr,
                                    value: '', // delete data in input text
                                    error: ''  // delete error
                                })
                            } else {
                                this.setState({
                                    error: "Please submit a task"
                                })
                            }
                            console.log("ListItem Data", this.state.list)
                        }} />
                </section>

                <section className="items-section">
                    {this.state.list.length ? (  // length =>  pass on list index 
                        this.state.list.map(item => (
                            <ListItem
                                text={item.title}
                                key={item.id}
                                handleDelete={() => {
                                    const filterItems = this.state.list.filter(
                                        filterItems => filterItems.id != item.id // true => return the item
                                    );
                                    this.setState({
                                        list: filterItems,
                                    });
                                }}
                            />
                        ))
                    ) : (
                        <span>loading...</span>
                    )}
                </section>
            </div>

        )
    }
}
