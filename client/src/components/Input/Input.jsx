import cn from "classnames"

import styles from "./Input.module.css"

function Input({ type = 'text', ...props }) {
    return (
        <input {...props} type={type} className={cn(styles.input)} />
    )
}

export default Input