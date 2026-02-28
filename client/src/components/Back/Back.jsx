import cn from "classnames"

import Button from "../Button/Button"

import styles from './Back.module.css'

function Back() {
    const clickHandler = () => {
        history.back()
    }

    return (
        <Button className={cn(styles.back)} onClick={clickHandler}>Back</Button>
    )
}

export default Back