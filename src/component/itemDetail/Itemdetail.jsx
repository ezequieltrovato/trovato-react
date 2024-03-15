import React from 'react'
import ItemCount from '../itemCount/ItemCount'

const ItemDetail = ({producto}) => {
    return (
        <div className='d-flex flex-column align-items-center justify-content-around'>
            <h1>Detalle de: {producto.name} </h1>
            <img alt={producto.name} src={producto.imagen1}/>
            <h2>{producto.description}</h2>
            <h3>${producto.price},00</h3><br />
            <h3>En stock: {producto.stock}</h3>
            <ItemCount stock={producto.stock}/>
        </div>
    )
}

export default ItemDetail