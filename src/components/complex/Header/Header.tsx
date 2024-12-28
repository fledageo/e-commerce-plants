import styles from "./Header.module.scss"
import { IoIosBasket } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-scroll"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const Header = () => {
    const [path, setPath] = useState<string>(location.pathname)
    const navigate = useNavigate()
    useEffect(() => {
        setPath(location.pathname)
    }, [location.pathname])

    return (
        <>
            <div className={`${styles.wrapper}`}>
                <div className={styles.container}>
                    <div className={styles.col}>
                        <div className={styles.logo}>
                            <img 
                                src="/src/assets/logo.png" 
                                alt="logo" 
                                className={styles.logo_img} 
                                onClick={() => navigate("/home")}
                            />
                        </div>
                    </div>
                    <div className={styles.col}>
                        {
                            path === "/home" && <nav className={styles.menu}>
                                <ul className={styles.menu_list}>
                                    <li className={styles.list_item}>
                                        <Link to="welcome" smooth={true} duration={500} className={styles.link}>
                                            Home
                                        </Link>
                                    </li>
                                    <li className={styles.list_item}>
                                        <Link to="store" smooth={true} duration={500} className={styles.link}>
                                            Store
                                        </Link>
                                    </li><li className={styles.list_item}>
                                        <Link to="about" smooth={true} duration={500} className={styles.link}>
                                            About
                                        </Link>
                                    </li><li className={styles.list_item}>
                                        <Link to="contact" smooth={true} duration={500} className={styles.link}>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        }
                    </div>
                    <div className={styles.col}>
                        <div className={styles.user}>
                            <IoMdHeartEmpty className={styles.user_action} onClick={() => navigate("/favorites")}/>
                            <IoIosBasket className={styles.user_action} onClick={() => navigate("/basket")}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
