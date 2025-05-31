import React from 'react'

// this is my selectors on my cards. 
const Select = ({flavor, price, size, change}) => {
    return(
        <li>
            <input type="number" className="slice form-control-sm w-25" data-price={price} name={flavor} data-size={size}  min='0' max='10' onChange={change}/>
            <label>
                {flavor}
            </label>
        </li>
    )
}
export default Select;