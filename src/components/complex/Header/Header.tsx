import styles from "./Header.module.scss"
import { SlBasket } from "react-icons/sl";
import { IoMdHeartEmpty } from "react-icons/io";
import { useEffect, useState } from "react";
export const Header = () => {
    const [isTop,setIsTop] = useState<boolean>(true)

    useEffect(() => {
        const checkScroll = () => {
            if(window.scrollY > 0){
                setIsTop(false)
            }else{
                setIsTop(true)
            }
        }
        document.addEventListener("scroll", checkScroll)

        return () => {
            document.removeEventListener("scroll", checkScroll)
        }
    },[])

    
    return (
        <div className={`${styles.wrapper} ${!isTop ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                <div className={styles.col}>

                </div>
                <div className={styles.col}>
                    <div className={styles.logo}>
                        <img src="/src/assets/logo.png" alt="logo" className={styles.logo_img} />
                    </div>
                </div>
                <div className={styles.col}>
                    <div className={styles.user}>
                        <IoMdHeartEmpty color="#dee2b1" size={30}/>
                        <SlBasket color="#dee2b1" size={28}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
