import { useNavigate } from 'react-router';
import styles from './Basket.module.scss'
import { GrFormPrevious } from "react-icons/gr";
import { useAppDispatch, useAppSelector } from '../../store/store';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { decreaseAmount, increaseAmount, removeFromBasket, setTotal } from '../../features/basket/basketSlice';
import { IBasketProduct } from '../../lib/types';
import { useEffect } from 'react';


export const Basket = () => {
    const products = useAppSelector(state => state.basket.products)
    const total = useAppSelector(state => state.basket.total)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        const result = products.reduce((acc,elm) => acc + (elm.amount * elm.price),0).toFixed(2)
        dispatch(setTotal(+result))
    },[products])

    const handleIncrease = (item:IBasketProduct) => {
        dispatch(increaseAmount(item))
    }
    const handleDecrease = (item:IBasketProduct) => {
        if(item.amount - 1 < 1){
            dispatch(removeFromBasket(item))
        }else{
            dispatch(decreaseAmount(item))
        }
    }

    const handleRemove = (item:IBasketProduct) => {
        dispatch(removeFromBasket(item))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.previous}>
                        <GrFormPrevious onClick={() => navigate("/home")} />
                    </div>
                    <h2>Basket</h2>
                </div>
                <div className={styles.basket}>
                    <div className={styles.basket_products}>
                        {
                            products.map(item => <div key={item.id} className={styles.item}>
                                <div className={styles.product}>
                                    <img src={item.image} alt="product image" />
                                    <span className={styles.item_name}>{item.name}</span>
                                </div>
                                <div className={styles.amount}>
                                    <button className={styles.changeAmount}>
                                        <MdKeyboardArrowLeft onClick={() => handleDecrease(item)}/>
                                    </button>
                                    <span className={styles.item_amount}>{item.amount}</span>
                                    <button className={styles.changeAmount}>
                                        <MdKeyboardArrowRight onClick={() => handleIncrease(item)}/>
                                    </button>
                                </div>
                                <span className={styles.item_price}>${item.price}</span>
                                <button className={styles.item_remove} onClick={() => handleRemove(item)}>
                                    <IoIosClose />
                                </button>
                            </div>)
                        }
                    </div>
                    <div className={styles.basket_summary}>
                        <h3>Summary</h3>
                        <div className={styles.order_total}>
                            <span>Order total</span>
                            <span>${total}</span>
                        </div>
                        <div className={styles.shipping}>
                            <span>Shipping</span>
                            <span>free</span>
                        </div>
                        <div className={styles.total}>
                            <span>Total</span>
                            <span className={styles.total_text}>${total}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
