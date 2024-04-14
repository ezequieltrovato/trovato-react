import React from 'react'
import {useState, useEffect} from 'react'
import ItemList from '../itemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'

function ItemListContainer({greeting}) {
    const [products, setProducts]= useState([])
    const  [loading, setLoading]= useState(false)
    const {categoryId}= useParams()

    useEffect(() =>{
        setLoading(true)
        const productCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        getDocs(productCollection)
        .then((res)=>{
            const data= res.docs.map((doc)=>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
                })
            setProducts(data)
    })
    .catch((error)=>console.log(error))
    .finally(()=>setLoading(false))                                    
    },[categoryId])

    

if (loading){
    return <h2>Plantando...</h2>
}

return (
    <div>
        <h1 className='fst-italic text-danger-emphasis'style={{textAlign:'center'}}>{greeting}</h1>
        <ItemList products={products}/>
    </div>
    )
}

export default ItemListContainer 