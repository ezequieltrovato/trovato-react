import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, clear, cartTotal, removeItem }= useContext(CartContext)
    return (
    <div>
        <div>
        {
            cart.map((item)=>{
                return(
                    <div key={item.id} style={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', padding:'2rem'}}>
                        <img src={item.imagen1} alt={item.name} style={{width:'5rem'}}/>
                        <p>{item.name}</p>
                        <p>${item.price}</p>
                        <p>{item.quantity}</p>
                        <p>${item.price * item.quantity}</p>
                        <button className='btn btn-danger' onClick={()=> removeItem(item.id)}>X</button>

                    </div>
                )
            })
        }
    </div>
    <p>Total a pagar: ${cartTotal()}</p>
    <button className='btn btn-danger' onClick={clear}>Vaciar Carrito</button>
    <Link to='/checkout' className='btn btn-success' style={{ marginLeft: '1rem' }}>Terminar Compra</Link>
    <Link to="/" className='btn btn-primary' style={{ marginLeft: '1rem' }}>Seguir comprando</Link>
    </div>
    )
}

export default CartView