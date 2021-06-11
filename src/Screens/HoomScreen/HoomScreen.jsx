import './Styles.css'
import React, { useState, useEffect } from 'react'
import Button from '../../Components/Button/Button'
import ListItem from '../../Components/ListItem/ListItem'
import { v4 as uuidv4 } from 'uuid'; // unique id 
import axios from 'axios'; // fetch data 


const HoomScreen = () => {
    const [value, setValue] = useState('');
    const [list, setList] = useState([]);
    const [error, setError] = useState('');


    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/todos"
            );
            setList(response.data.splice(0, 30));
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div className="inner-container" >
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
                            setValue(e.target.value)
                        }}
                        value={value}
                    />
                    {error ?
                        <span>
                            {error}
                        </span> : null}
                </div>
                <Button
                    text="Add"
                    handleClick={() => {
                        if (value) {// Do you contains on data in 
                            const newArr = [
                                {
                                    title: value,
                                    id: uuidv4()
                                },
                                list,
                            ]
                            setList(newArr)
                            setValue('')
                            setError('')

                        } else {
                            setError({
                                error: "Please submit a task"
                            })
                        }
                    }} />
            </section>

            <section className="items-section">
                {list?.length ? (  // length => use pass on list index 
                    list.map(item => (

                        <ListItem
                            text={item.title}
                            key={item.id}
                            handleDelete={() => {
                                const filterItems = list.filter(
                                    (filterItem) => filterItem.id != item.id // true => return the item
                                );
                                setList({
                                    value,
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

export default HoomScreen
