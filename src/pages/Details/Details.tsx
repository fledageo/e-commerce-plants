import styles from "./Details.module.scss"
import { useParams } from "react-router"
import React, { useEffect, useState } from "react"
import { IProduct } from "../../lib/types"
import { useAppSelector } from "../../store/store"

export const Details = () => {
  const [product,setProduct] = useState<IProduct | null>(null)
  const [quantity,setQuantity] = useState<number>(1)
  const all = useAppSelector(state => state.products.products)
  const {productId} = useParams()

  useEffect(() => {
    const find = all.filter(product => product.id == productId)[0]
    setProduct(find)  
  },[])

  const increase = () => {
    setQuantity(quantity + 1)
  }
  const decrease = () => {
    if(quantity - 1 >= 1){
      setQuantity(quantity - 1)
    }
  }
  const quantityOnChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value == ""){
      setQuantity(1)
    }else{
      setQuantity(+e.target.value)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.img}>
          <img src={product?.image} alt="product_image"/>
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{product?.name}</h2>
          <span className={styles.price}>{product?.price}$</span>
          <p className={styles.description}>
            {product?.description}
          </p>
          
          <div className={styles.actions}>
            <div className={styles.quantity}>
              <button onClick={decrease} className={styles.changeBtn}>-</button>
              <input 
                type="number" 
                min={1}
                value={quantity} 
                onChange={(e) => quantityOnChange(e)}
                className={styles.field}
              />
              <button onClick={increase} className={styles.changeBtn}>+</button>
            </div>
            <button className={styles.addToCart}>Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
