import "./Styles.css"

const Button =(isPurble, handleClick, text)=> {

        return ( 
            <button 
                className={isPurble?
                "btn backgrounded-button"
                :
                "btn"
            }
                onClick={handleClick}>
                {text}
            </button>
            
        ) 
}
export default Button