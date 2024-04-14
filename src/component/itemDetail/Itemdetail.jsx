import React, { useContext, useState } from 'react'
import ItemCount from '../itemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const ItemDetail = ({productDetail}) => {
    const [purchase, setPurchase]= useState(false)
    const {addItem, itemQuantity} = useContext(CartContext)
    const onAdd = (cantidad) =>{
    addItem(productDetail, cantidad)
    setPurchase(true)
    }
    const stockInCart = itemQuantity(productDetail.id)
    return (
    <div style={{ textAlign: 'center' ,fontWeight: 'bold'}}>
        <h3>Planta seleccionada : {productDetail.name}</h3>
        <img src={productDetail.imagen1} alt={productDetail.name} style={{ display: 'block', margin: '0 auto' }}/>
        <p>{productDetail.description}</p>
        <p>${productDetail.price}</p>
        {purchase 
        ? <Link className="btn btn-success" to='/cart'>Ir al carrito</Link>
        : <ItemCount stock={productDetail.stock - stockInCart} onAdd={onAdd}/>}
        {purchase &&  <Link to="/" className="btn btn-primary" style={{  textDecoration: 'none',marginLeft: '1rem' }}>Seguir comprando</Link>}
        </div>
    
    )
}

export default ItemDetail