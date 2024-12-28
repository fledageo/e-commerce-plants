import { useEffect, useState } from 'react'
import { IBasketProduct, IProduct } from '../../../lib/types'
import styles from './Product.module.scss'
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";
import { IoIosBasket } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { useNavigate } from 'react-router';
import { addToFavorites, removeFromFavorites } from '../../../features/favorites/favoritesSlice';
import { addToBasket } from '../../../features/basket/basketSlice';

interface IProps {
    item: IProduct
}

export const Product = ({ item }: IProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const [isHover, setIsHover] = useState<boolean>(false)
    const favorites = useAppSelector(state => state.favorites.favorites)
    const dispatch = useAppDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        const isItemFavorite = favorites.find(elm => elm.id === item.id)
        if (isItemFavorite) {
            setIsFavorite(true)
        } else {
            setIsFavorite(false)
        }
    }, [])

    const handleAddToFavorites = () => {
        if (!isFavorite) {
            dispatch(addToFavorites(item))
            setIsFavorite(true)
        }else{
            dispatch(removeFromFavorites(item))
            setIsFavorite(false)
        }
    }

    const handleAddToBasket = () => {
        
        dispatch(addToBasket(item))
    }

    return (
        <div
            className={styles.product}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className={styles.product_img_block}>
                <img src={item.image} alt={item.name} />

                <div className={`${styles.actions} ${isHover ? styles.open : ""}`}>
                    <div className={styles.btn} onClick={handleAddToFavorites}>
                        {
                            isFavorite ? <GoHeartFill /> : <GoHeart />
                        }
                    </div>
                    <div className={styles.btn} onClick={handleAddToBasket}>
                        <IoIosBasket />
                    </div>
                    <div className={styles.btn} onClick={() => navigate(`/details/${item.id}`)}>
                        <FaRegEye />
                    </div>
                </div>
            </div>
            <div className={styles.product_info}>
                <span className={styles.product_name}>{item.name}</span>
                <span className={styles.product_price}>${item.price}</span>
            </div>

        </div>
    )
}
