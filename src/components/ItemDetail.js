import Rate from 'rc-rate';
import 'rc-rate/assets/index.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

  const [cantidadSel, setCantidadSel] = useState(0)

  const onAdd = (cantidadSel) => {
    setCantidadSel(cantidadSel)
  }

  return (
    <>
      <div className="item-detail" id={item.id}>
        <img src={item.image} alt="" />
        <div className="titulos">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div>
            <Rate onChange={(val)=>{console.log(val)}} allowHalf count={5} value={item.rating?.rate}/>
            <span>Rates : {item.rating?.count}</span>
            </div>
        </div>
        <p className="descripcion">{item.description}</p>
      </div>
      {cantidadSel === 0 ? (
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
      ) : (
        <div className="md-control">
          <h4>Cantidad: {cantidadSel}</h4>
          <Link to="/cart">Terminar compra</Link>
        </div>
      )
      }
    </>
  )
}

export default ItemDetail