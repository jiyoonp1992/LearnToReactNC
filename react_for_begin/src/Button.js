import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({text}){
    return (
        // <button style={{
        //     backgroundColor : "tomato",
        //     color : "white",
        // }}>{text}</button>
        <button className={styles.btn}>{text}</button>
    )
}
Button.propTypes = {
    test : PropTypes.string.isRequired,
}
export default Button;