import { IProduct } from '../../../lib/types'
import styles from './Product.module.scss'

interface IProps {
    item:IProduct
}

export const Product = ({item}:IProps) => {

    

    return (
        <div key={item.id} className={styles.product}>
            <div className={styles.product_img}>
                <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.product_info}>
                <span className={styles.product_name}>{item.name}</span>
                <span className={styles.product_price}>{item.price}$</span>
            </div>

        </div>
    )
}
