import { Home } from '../pages/Location'
import SignInModal from './SignIn'

const Button = () => {

  return (
    <div className="col-md-4" id="findMe">
      <h6 className="text-danger mt-2 fontTwo">
        <SignInModal />Location:</h6>
      {/* this is my button that goes to my location page */}
      <a href="./Location"><button className="btn btn-danger fontOne">Find Me</button></a>
    </div>
  )
}
export default Button; 