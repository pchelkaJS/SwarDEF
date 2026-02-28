import cn from "classnames"
import { NavLink } from "react-router"

import styles from "./Button.module.css"

function Button({ children, to = '', className = '', ...props }) {
    return (
        <button {...props} className={cn(styles.button, className)}>
            {children}
            {to === '' ? <></> : <NavLink to={to}></NavLink>}
        </button>
    )
}

export default Button