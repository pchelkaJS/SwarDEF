import Flex from '../../components/Flex/Flex'
import styles from './FeedRu.module.css'
import Nav from '../../components/Nav/Nav'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

function Feed() {
    const [posts, sendPosts] = useState([])

    useEffect(() => {
        (async () => {
            const response = await axios.get("http://localhost:3000/api/posts")
            sendPosts(response.data.reports)
        })()
    }, [])

    console.log(posts)

    return (
        <Flex direction='column' align='center' justify='space-evenly'>
            <h1>SwarDEF</h1>
            <span>Хочешь отправить жалобу? Перейди по ссылке: </span> <Nav to='/sendReport'>/sendReport</Nav>
            <Flex direction='column' align='center' borders={['top']}>
                <h2>Жалобы:</h2>
                {posts.length > 0 ? (Array.isArray(posts) && posts.map((el, index) => (
                    <li key={index} className={styles.report}>
                        <h2>Нарушитель: {el.cheater}</h2>
                        <span >{el.text}</span>
                        <h3 className={styles[el.status]}>Статус: {el.status}</h3>
                        {el.answer ? (<><h2 className = {styles.tittle}>Ответ админа:</h2><span className={styles.answer}>{el.answer}</span></>) : ''}
                    </li>
                ))) : "No reports yet"}
            </Flex>
        </Flex>
    )
}

export default Feed