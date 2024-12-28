import styles from './Layout.module.scss'
import { Outlet, useNavigate } from 'react-router'
import { Header } from '../Header/Header'
import { useEffect } from 'react'

export const Layout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate("/home")
    }, [])

    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
