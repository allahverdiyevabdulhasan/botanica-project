import React from 'react'
import { useCart } from 'react-use-cart';
import BreadCrumb from '../components/BreadCrumb';
import { motion } from 'framer-motion';
import { FaRegTrashCan } from "react-icons/fa6";

const Basket = () => {
  const { isEmpty, items, updateItemQuantity, removeItem, cartTotal, emptyCart } = useCart();
  const breadcrumbItems = [
    { text: 'Home', link: '/' },
    { text: 'Basket', link: '/basket' },
  ];

  return (
    <>
      <div className='basket'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="banner" >
          <div>
            <motion.h1
              initial={{ opacity: 0, y: '-10%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-10%' }}
              transition={{ duration: 1.2 }}
            >Basket</motion.h1>
            <BreadCrumb items={breadcrumbItems} />
          </div>
        </motion.div>
        {isEmpty ? <div className="my-5 d-flex align-items-center justify-content-center"><img src="https://supershopping.lk/images/home/Cart-empty.gif" /></div> : <div className='d-flex align-items-center justify-content-center flex-column'>
          <div className="container">
            <div className="row my-5">
              <div className="col-lg-7">
                <table className="table">
                  <thead >
                    <tr>
                      <th scope="col">PRODUCT</th>
                      <th scope="col"></th>
                      <th scope="col">PRICE</th>
                      <th scope="col">QUANTITY</th>
                      <th scope="col">SUBTOTAL</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map(item => (
                      <tr>
                        <td><img width={100} src={item.front_img} alt={item.title} /></td>
                        <td>{item.title}</td>
                        <td>${item.price}</td>
                        <td>
                          <div className='quantity_btn '>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} >-</button>
                            <span className='mx-3'>{item.quantity}</span>
                            <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} >+</button>
                          </div>
                        </td>
                        <td>${item.price * item.quantity}.00</td>
                        <td className='trash_btn'><FaRegTrashCan onClick={() => { removeItem(item.id) }}/></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <h4 className='my-5'>Total price:<span className='text-danger'> ${cartTotal}.00</span></h4>
                <button className=' btn btn-dark' onClick={() => { emptyCart() }}>Clear all</button>
              </div>

              <div className='col-lg-5'>
                cart
              </div>
            </div>
          </div>

        </div>}
      </div>

    </>
  )
}

export default Basket