import cn from "classnames"

import styles from "./Form.module.css"

function Form({ children }) {
    return (
        <form className={cn(styles.form)}>
            {children}
        </form>
    )
}

export default Form