import cn from "classnames"
import { v4 } from "uuid"

import Button from "../Button/Button"
import Input from "../Input/Input"

import styles from "./Block.module.css"

function Block({ structure }) {
    return (
        <li className={cn(styles.block)}>
            {structure.map(el => {
                let component = <></>
                switch (el.name) {
                    case 'image':
                        component = <img key={v4()} src={el.src}></img>
                        break
                    case 'text':
                        component = <p key={v4()}>{el.text}</p>
                        break
                    case 'main':
                        component = <h2 key={v4()}>{el.text}</h2>
                        break
                    case 'button':
                        component = <Button key={v4()} to={el.to} onClick={el.onClick}>{el.text}</Button>
                        break
                    case 'input':
                        component = <Input key={v4()} type={el.type} placeholder={el.placeholder} />
                        break
                    default:
                        component = el.component
                        break
                }
                return component
            })}
        </li>
    )
}

export default Block