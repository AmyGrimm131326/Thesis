import { Jumbotron, Container } from 'react-bootstrap'

// this is on my homepage it has the toppings of each pizza.
const JumboOne = () => {

    return (

        <Jumbotron fluid className="jumbo">
            <Container className="text-center" id="orderAhead">
                <div className="text-center mt-5">
                    <h1 className="display-3 fontTwo mb-5 bg-danger">Order Ahead and Pick-Up</h1>
                    <a href="./location"><img className="img-fluid" src="./images/pizzasupreme.png" alt="pizza" height="280" /></a>
                </div>
                <hr></hr>
                <h1 className="fontOne">We make our sauce with fresh produce from a local garden. We add just enough heat to keep your attention, and coming back for more fresh out the oven goodness.</h1>
                <hr></hr>
                <h2 className="text-danger fontOne bg-success mt-5">"Speciality" Pizza Toppings:</h2>
                <div className="text-left">
                    <h4 className="fontTwo">Extreme Veggie-<small className="fontOne">(Onion, Green Pepper, Mushroom, Black Olives, Banana Peppers, Green Olives)</small></h4>
                    <h4 className="fontTwo">King Of Pepperoni-<small className="fontOne">(Extra Pepperoni and Cheese)</small></h4>
                    <h4 className="fontTwo"> Meat Degree-<small className="fontOne">(Sausage, Pepperoni, Bacon, Hamburger, Ham)</small></h4>
                    <h4 className="fontTwo">Hawaii Special-<small className="fontOne">(Pineapple, Ham, Onion)</small></h4>
                </div>
            </Container>
        </Jumbotron>
    )
}
export default JumboOne;