import { useEffect, useRef, useState } from "react"
import styles from "./Welcome.module.scss"
import { useNavigate } from "react-router"
import { Link } from "react-scroll"

export const Welcome = () => {
  const [isIn, setIsIn] = useState<boolean>(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      Object.assign(document.documentElement, {
        style: `
             --move-x:${(e.clientX - window.innerWidth / 2) * -0.005}deg; 
             --move-y:${(e.clientY - window.innerHeight / 2) * -0.01}deg; 
          `
      })
    }

    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        const entry = entries[0]
        setIsIn(entry.isIntersecting)
      },
      {
        threshold: 0.5
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    if (isIn) {
      document.addEventListener("mousemove", handleMouseMove)
    } else {
      document.removeEventListener("mousemove", handleMouseMove)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    }
  }, [isIn])

  return <>

    <div className={styles.section} ref={sectionRef} id="welcome">
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
          <Link
            to="store"
            className={styles.action}
            smooth={true}
            duration={500}
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  </>
}
