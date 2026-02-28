import cn from "classnames"

import styles from "./Flex.module.css"

function Flex({ children, direction = "row", justify = "start", align = "center", borders = [], ...props }) {
    return (
        <div {...props} style={{ flexDirection: direction, justifyContent: justify, alignItems: align }} className={cn(styles.flex, { [styles.top]: borders.includes('top'), [styles.bottom]: borders.includes('bottom'), [styles.left]: borders.includes('left'), [styles.right]: borders.includes('right') })}>
            {children}
        </div>
    )
}

export default Flex