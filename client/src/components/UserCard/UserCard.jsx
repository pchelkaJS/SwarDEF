import cn from 'classnames'

import Flex from '../Flex/Flex'

import styles from './UserCard.module.css'

function UserCard({ user, borders = [], ...props }) {
    return (
        <Flex {...props} className={cn(styles.card)} justify='space-between' borders={borders}>
            <img className={cn(styles.avatar)} src={user.avatar} />
            <h2 className={cn(styles.name)}>{user.name}</h2>
        </Flex>
    )
}

export default UserCard