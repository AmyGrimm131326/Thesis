import { useState, useEffect } from 'react'
import AdminCard from '../components/AdminCard'
import OrderModal from '../components/OrderModal'
import api from "../api/api"

const PreviousPage = ({admin}) => {

  
   const[completeOrders, setCompleteOrders] = useState([])
    
  
  // this is my admin page and the card it displays it is updating it.
 useEffect(()=>{
    api.getOrders().then(data => {
      let complete = data.data.filter(order => order.complete)
      setCompleteOrders( complete );
    })
  })

    return (
      <>
        {admin ?
          <div className="container-fluid py-5 my-5">
            <h3 className="text-success my-5 text-center">Previous Orders</h3>
            <ul className="my-5">
              {completeOrders.map((order, i) => {
                return <li className="my-2" key={i}><OrderModal order={order} /></li>
              })}
            </ul>
          </div> : <div className="mt-5 text-center ml-5 mr-5 mb-5"><h1>Must be Signed In as Admin to be able to view this page.</h1></div>}
      </>
    )
  }
export default  PreviousPage; 