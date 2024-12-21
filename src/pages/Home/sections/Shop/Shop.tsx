import { useEffect } from 'react'
import styles from './Shop.module.scss'
import { useAppDispatch, useAppSelector } from '../../../../store/store'
import { setProducts } from '../../../../store/actions'
import { Product } from '../../../../components/simple/Product/Product'

export const Shop = () => {
    const products = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(res => {
                dispatch(setProducts(res.products))
            })
    }, [])
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Plants</h2>
                    <div className={styles.line}></div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Accusamus cumque reiciendis animi aspernatur alias iusto? Natus quas quia doloremque necessitatibus.
                    </p>
                </div>
                <div className={styles.products}>
                    <div className={styles.grid_container}>
                        {
                            products.map(item => <Product item={item}/>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
