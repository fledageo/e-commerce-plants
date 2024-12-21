import { useEffect } from "react"
import styles from "./Welcome.module.scss"
// import { RainCanvas } from "../../simple/RainCanvas/RainCanvas"

export const Welcome = () => {

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      Object.assign(document.documentElement, {
        style: `
             --move-x:${(e.clientX - window.innerWidth / 2) * -0.005}deg; 
             --move-y:${(e.clientY - window.innerHeight / 2) * -0.01}deg; 
          `
      })
    }
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener("mousemove",handleMouseMove)
    }
  }, [])

  return <>

    <div className={styles.layers}>
      <div className={styles.container}>
        <div className={`${styles.layersItem} ${styles.layer1}`}></div>
        <div className={`${styles.layersItem} ${styles.layer2}`}></div>
        <div className={`${styles.layersItem} ${styles.layer3}`}></div>
        <div className={`${styles.layersItem} ${styles.layer4}`}></div>
      </div>
    </div>
     <div className={styles.wrapper}>
      <div className={styles.content}>
          <h1 className={styles.title}><span>Welcome</span> <span>to</span> <span>botanical</span></h1>
          <span className={styles.subtitle}>Plants gonna make people happy.</span>
          <button className={styles.action}>Shop Now</button>
      </div>
     </div>
  </>
}
