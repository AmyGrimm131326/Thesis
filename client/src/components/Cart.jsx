import { useState, useEffect } from "react"
import CartRow from "./CartRow"
import api from "../api/api"


// this is me declaring my cart componet and setting state
function Cart({ cart }) {

  const [message, setMessage] = useState("")
  const [inputs, setInputs] = useState({})
  const [total, setTotal] = useState(0)
  const [sub, setSub] = useState(0)
  const [tax, setTax] = useState(0)

  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))
  }
  // this is adding up my total when the cart comes through.
  useEffect(() => {
    let total = 0
    for (const item of cart) {
      total += (item.qty * item.price)
    }
    // this is setting the subtotal, tax and grandtotal.
    setTotal(total * 1.07)
    setSub(total)
    setTax(total * .07)

  })
  // this is grabbing the info needed to create a newOrder.
  const handleSubmit = (e) => {
    e.preventDefault()
    inputs.total = total
    inputs.cart = cart

    // this is sending my order to the backend, reloading the page.
    api.newOrder(inputs).then(data => {
      console.log(data.data);

      setMessage(data.data.success);
      setTimeout(() => { location.reload() }, 2500)
    })
  }
  return (
    <>
      {cart.length > 0 ? <div className="container mt-5 hidden" id="cart">
        <table className="table" id="cartTable">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Qty</th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody id="cartItems">
            {/* mapping through my cart to display at the bottom of my page. */}
            {cart.map((item, i) => {
              return (
                <CartRow key={i} qty={Number(item.qty)} name={item.name} price={Number(item.price)} />)
            })}
            <tr>
              <td>Sub-Total: ${sub.toFixed(2)}</td>
              <td>Tax: ${tax.toFixed(2)}</td>
              <td>Total:</td>
              <td>${total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        {/* this is my checkout modal and it has the credit card modal to pay. */}
        <div className="row p-1 d-flex justify-content-center">
          <button type="submit" className="btn btn-success mt-4 fontOne btn-lg " id="checkOut" data-toggle="modal"
            data-target="#checkOutModal"> $$$ Check
        Out $$$</button>
        </div>
      </div> : null}

      {/* this is my checkout modal and it has the credit card modal to pay. */}
      <div className="modal fade" id="checkOutModal" tabIndex="-1" role="dialog" aria-labelledby="checkOutModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-heade bg-danger">
              <h1 className="modal-title " id="checkOutLabel">Check Out </h1>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" id="xBtn">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            {message ? <h2 className="text-success">{message}</h2> :
              <div className="modal-body" id="mBody">
                <form onSubmit={e => { handleSubmit(e) }}>
                  <div className="form-group">
                    <label htmlFor="name">First Name</label>
                    <input name="firstName" className="form-control" onChange={e => handleChange(e)} type="text" placeholder="First Name" id="firstNameInput" required />
                    <label htmlFor="lastName">Last Name</label>
                    <input name="lastName" className="form-control" onChange={e => handleChange(e)} type="text" name="lastName" id="lastNameInput" placeholder="Last Name"
                      required />
                    <label htmlFor="Email">Email</label>
                    <input name="userEmail" className="form-control" onChange={e => handleChange(e)} type="text" id="email" placeholder="Email"
                      required />
                    <label htmlFor="cardInfo">Credit Card Number</label>
                    <input name="cardNum" className="form-control" onChange={e => handleChange(e)} type="text" name="cardInfo" id="cardInfo" placeholder="Enter 16 digit card number" required />
                    <select className="form-control mt-2" name="cardType" id="cardType" required>
                      <option value="master">Master Card</option>
                      <option value="visa">Visa</option>
                      <option value="discover">Discover</option>
                    </select>
                    <label htmlFor="cvc">CVC Number</label>
                    <input name="cvc" className="form-control" onChange={e => handleChange(e)} type="password" minLength="3" maxLength="4" name="cvc" id="cvc"
                      placeholder="Enter Security Code" required />
                    <p>Total:<span id="checkOutTotal" className="text-success">${total.toFixed(2)}</span></p>
                  </div>
                  <button className="bg-success btn" type="submit">Submit</button>
                </form>
              </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}
export default Cart;