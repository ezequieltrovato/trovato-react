import { useEffect, useState } from "react"
import { getOneProduct, getProducts } from "../../mock/fakeApi"
import ItemDetail from "../itemDetail/Itemdetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () =>{
    const [producto, setProducto] = useState({})
    const {itemId}=useParams()

    useEffect(()=>{
        getProducts()
        .then((res)=> setProducto(res.find((item)=> item.id === itemId)))
        .catch((error)=> console.log(error))
    },[itemId])

    return(
        <div>
            <ItemDetail producto={producto}/>
        </div>
    )
}

export default ItemDetailContainer