import { useNavigate } from 'react-router';
import { Product } from '../../components/simple/Product/Product'
import { useAppSelector } from '../../store/store'
import styles from './Favorites.module.scss'
import { GrFormPrevious } from "react-icons/gr";

export const Favorites = () => {
  const favorites = useAppSelector(state => state.favorites.favorites)
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.previous}>
            <GrFormPrevious onClick={() => navigate("/home")}/>
          </div>
          <h2>Favorites</h2>
        </div>
        <div className={styles.favorites}>
          {
            favorites.map(item => <Product item={item} key={item.id}/>)
          }
        </div>
      </div>
    </div>
  )
}
