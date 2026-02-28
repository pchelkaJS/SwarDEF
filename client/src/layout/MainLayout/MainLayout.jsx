import { Outlet } from 'react-router'
import cn from 'classnames'

import Flex from '../../components/Flex/Flex'
import Nav from '../../components/Nav/Nav'

import styles from './MainLayout.module.css'

function MainLayout() {
    return (
        <Flex direction='column'>
            <nav className={cn(styles.nav)}>
                <Flex direction='row' justify='space-evenly'>
                    <h1>SwarTime</h1>
                    <Nav to='/'>Главная</Nav>
                    <Nav to='/sendReport'>Подать жалобу</Nav>
                </Flex>
            </nav>
            <Outlet />
        </Flex>
    )
}

export default MainLayout