import cn from "classnames"
import { NavLink } from "react-router"

import styles from "./Nav.module.css"

function Nav({ children, to, ...props }) {
    return (
        <button className={cn(styles.button)}>
            {children}
            <NavLink className={({ isActive }) => cn({ [styles.active]: isActive })} {...props} to={to}></NavLink>
        </button>
    )
}

export default Nav