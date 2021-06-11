import "./Styles.css" 
import Button from "../Button/Button";

 const ListItem = (props) => {

        return (
            <div className="list-item">
                <span className="task-title">
                {props.task}
                </span>
                <Button 
                text="Delete"
                isPurble={true}
                handleClick={props.handleDelete}
                />
            </div>
        )
    }

export default ListItem
