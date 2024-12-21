export interface IState{
    products:IProduct[]
}

export interface IProduct {
    id:string
    name:string
    price:number
    image:string
}