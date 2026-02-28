import cn from "classnames"

import Flex from "../Flex/Flex"

import styles from './Post.module.css'

function Post({ post }) {
    return (
        <li className={cn(styles.post)}>
            <img src={post.image} />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <Flex></Flex>
        </li>
    )
}

export default Post