import { useState, useEffect } from 'react'
import AdminCard from '../components/AdminCard'
import OrderModal from '../components/OrderModal'
import api from "../api/api"

const AdminPage = ({ admin }) => {

  const [incompleteOrders, setIncompleteOrders] = useState([])

  // this is my admin page and the card it displays it is updating it.
  useEffect(() => {
    api.getOrders().then(data => {
      let incomplete = data.data.filter(order => !order.incomplete)
      document.querySelector('title').innerText = `New Orders (${incomplete.length})`
      setIncompleteOrders(incomplete);
    })
  })

  return (
    <>
      {admin ?
        <div className="container-fluid">
          <h3 className="text-success text-center">Current Orders</h3>
          <div className="row justify-content-center">
            {incompleteOrders.map((order, i) => {
              return <AdminCard key={i} order={order} />
            })}
          </div>
          <a href="/previousOrders" className="text-success">To View Previous Orders</a>
        </div>
        : <div className="mt-5 text-center ml-5 mr-5 mb-5"><h1>Must be Signed In as Admin to be able to view this page.</h1></div>}
    </>
  )
}
export default AdminPage; 