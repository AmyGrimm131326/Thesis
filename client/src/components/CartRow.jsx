

// this is my table that displays after one item or more has been slected.
const CartRow = ({ qty, name, price }) => {

    return (
        <tr>
            <td>{qty}</td>
            <td>{name}</td>
            <td>${price}</td>
            <td>${qty * price}</td>
        </tr>
    )
}
export default CartRow;