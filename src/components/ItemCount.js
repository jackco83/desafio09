import { useState } from "react"

const ItemCount = (props) => {
  let [estado, setEstado] = useState(props.initial)

  const btnSumar = () => {
    if (estado < props.stock) {
      setEstado(estado + 1)
    }
  }

  const btnRestar = () => {
    if (estado > props.initial) {
      setEstado(estado - 1)
    }
  }

  const btnAgregar = () => {
    props.onAdd(estado)
  }

  return (
    <div className="md-control">
      <div>
        <button onClick={btnRestar}>
          <i className="fa-solid fa-minus"></i>
        </button>
        <span>{estado}</span>
        <button onClick={btnSumar}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
      <div>
        <button onClick={btnAgregar}>Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount