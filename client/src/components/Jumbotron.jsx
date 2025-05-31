import { Jumbotron, Container } from 'react-bootstrap'

// this is on my location page where I am explaining the location of RV. It also has a map of where I am posted at.
const Jumbo = () => {
    return (
        <Jumbotron fluid className="text-center jumbo">
            <Container className="bg-success">
                <h3 className="mb-5 fontOne" id="location" >Always check to see where we are. We move at the top of the hour if we move at all. So please check so you head to the right <br /><span className="text-danger fontTwo">"POSTED ON THE CORNER" <br /></span>location for pick-up or cash and carry.</h3> <img className="img-fluid rounded-circle shadow text-center img-thumbnail mb-4" src="./images/location.jpeg" alt="globe" />
                <img className="img-fluid" id="map" src="./images/elkWithLocation.png" alt="map" />
                <p><a className="text-danger" href="/">Home Page</a></p>
            </Container>
        </Jumbotron>
    )
}
export default Jumbo;