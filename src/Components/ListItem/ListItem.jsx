import "./Styles.css" 
import Button from "../Button/Button";

 const ListItem = () => {

        return (
            <div className="list-item">
                <span className="task-title">
                    {text}
                </span>
                <Button 
                text="Delete"
                isPurble={true}
                handleClick={handleDelete}
                />
            </div>
        )
    }

export default ListItem