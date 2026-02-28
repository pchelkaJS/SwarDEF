import cn from "classnames"

import Flex from "../Flex/Flex"
import Button from "../Button/Button"

import styles from "./Card.module.css"

function Card({ image, text, ...props }) {
    return (
        <Button {...props} className={cn(styles.card)}>
            {image}
            {text}
        </Button>
    )
}

export default Card