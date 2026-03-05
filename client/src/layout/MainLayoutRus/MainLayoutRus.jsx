import { Outlet } from 'react-router'
import cn from 'classnames'

import Flex from '../../components/Flex/Flex'
import Nav from '../../components/Nav/Nav'

import styles from './MainLayoutRus.module.css'

function MainLayout() {
    return (
        <Flex direction='column'>
            <nav className={cn(styles.nav)}>
                <Flex direction='row' justify='space-evenly'>
                    <h1>SwarDEF</h1>
                    <Nav to='/ru'>Главная</Nav>
                    <Nav to='/ru/sendReport'>Отправить жалобу</Nav>
                    <Nav to='/'>EN</Nav>
                </Flex>
            </nav>
            <Outlet />
        </Flex>
    )
}

export default MainLayout