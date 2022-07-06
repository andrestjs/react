import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { CartItem } from './CartItem'
import * as Yup from "yup" 
import {addDoc, collection, orderBy} from 'firebase/firestore'
import { db } from '../services/firebase'
import "./Checkout.css"
export const Checkout = () => {


  const createOrder = () => {
    const orderObj = {
      buyer : values,
      items : cart,
      total : getTotalPrice()
    }

    const collectionRef = collection(db,'orders')

    addDoc(collectionRef,orderObj).then(res => {
      alert(`La orden fue creada y el id de la orden es ${res.id}`)
    })
  }

  const onSubmit = ()=>{
    createOrder();
  }
  const {cart,getTotalPrice} = useContext(CartContext)
  const {values,errors, handleBlur,isValid, handleChange, handleSubmit} = useFormik({
    initialValues : {
      name:"",
      lastName:"",
      tel:"",
      email:"",
      confirmEmail:""
    },
    validationSchema: Yup.object({
      name : Yup.string().required("El nombre es obligatorio"),
      lastName : Yup.string().required("El apellido es obligatorio"),
      tel : Yup.number().required("El tel es requerido"),
      email : Yup.string().email()
                    .oneOf([Yup.ref("email")],"Los email no son iguales")
                    .required("El email es obligatorio"),
      confirmEmail : Yup.string().email()
                    .required("Es necesario confirmar el email")
                    .oneOf([Yup.ref("email")],"Los email no son iguales")

    }),
    onSubmit
  })

  const isValidForm = isValid;

  if(cart.length === 0){
    return(
      <div className="container">
        <p>No cuenta con productos agregados a su carrito. :)</p>
      </div>
    )
  }
  return (
    <div className='container'>
      <div>
        {cart.map(item => <CartItem close={false} key={item.id} {...item}/>)}

        <div style={{textAlign:'right',padding:"20px"}}>TOtal : {getTotalPrice()}</div>
      </div>
      <form onSubmit={handleSubmit} className="form" action="">
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input 
          className={(errors.name) ? 'error':''}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Apellido</label>
          <input 
          className={(errors.lastName) ? 'error':''}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text" id="lastName" />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Tel</label>
          <input 
          className={(errors.tel) ? 'error':''}
          value={values.tel}
          onChange={handleChange}
          onBlur={handleBlur}
          type="number" id="tel" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
          className={(errors.email) ? 'error':''}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="confirmEmail">Confirmar email</label>
          <input
          className={(errors.confirmEmail) ? 'error':''}
          value={values.confirmEmail}
          onChange={handleChange}
          onBlur={handleBlur}
          type="email" id="confirmEmail" />
        </div>
        <div className="form-group">
          <button disabled={!isValidForm } type="submit">Realizar Compra</button>
        </div>
      </form>
    </div>
  )
}
