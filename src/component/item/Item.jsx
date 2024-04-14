import {Link} from 'react-router-dom'

const Item = ({prod}) => {
    return(
        <div className="card"  style={{width: '15rem'}} >
            <img src={prod.imagen1} className="card-img-top" alt={prod.name}/>
            <div className="card-body " style={{ textAlign: 'center',fontWeight: 'bold' }}>
                <p className="card-text">{prod.name}</p>
                <p>${prod.price}</p>
            </div>
            <Link to={`/item/${prod.id}`} className="btn btn-primary" style={{fontWeight: 'bold' }}>Detalle</Link>
        </div>
    )
}
export default Item