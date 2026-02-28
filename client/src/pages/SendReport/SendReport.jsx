import Form from '../../components/Form/Form'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import { useState } from 'react'
import axios from 'axios'
import styles from './SendReport.module.css'
function SendReport() {
    const [warn, setWarn] = useState('')
    const [status, setStatus] = useState('')
    const registerHandler = async e => {
        e.preventDefault()
        if (!e.target.parentNode.children[1].value && !e.target.parentNode.children[2].value) {
            setWarn("All fields must be required")
        }
        else {
            const cheater = e.target.parentNode.children[1].value;
            const text = e.target.parentNode.children[2].value;
            const statuss = await axios.post(`http://localhost:3000/api/sendReport`, {
                cheater,
                text
            })
            if (statuss.data.status == "sucess"){
                setStatus("Sucess!")
            }
            else{
                setWarn(`An error appeared while sending...`)
            }

        }
    }


    return (
        <Form>
            <h1>Send a report</h1>
            <Input type='text' placeholder='Cheater' />
            <textarea name="message" rows="5" cols="30" placeholder='Текст жалобы' />
            <Button onClick = {registerHandler}>Send</Button>
            <p className={styles[`warn`]}>{warn}</p>
            <p className = {styles[`status`]}>{status}</p>
        </Form>
    )
}

export default SendReport