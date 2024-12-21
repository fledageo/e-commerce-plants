import styles from "./Home.module.scss"
import { Shop } from "./sections/Shop/Shop"
import { Welcome } from "./sections/Welcome/Welcome"
export const Home = () => {
  return (
    <>
      <Welcome/>
      <Shop/>
    </>
  )
}
