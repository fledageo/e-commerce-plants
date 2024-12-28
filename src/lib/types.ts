export interface IState{
    products:IProduct[]
    favorites:IProduct[]
}

export interface IProduct {
    id:string
    name:string
    price:number
    image:string
    description:string
}


export type IBasketProduct = IProduct & {
    amount:number
}