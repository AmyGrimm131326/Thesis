import { Jumbotron, Container } from 'react-bootstrap'

// this is my error page component.
const Error = () => {

  return (
      <Jumbotron  fluid className="text-center jumbo">
        <Container>
<img src="./images/wrongWay.jpeg" alt="wrong way"/>
          <h1 className="fontTwo">If you are reading this you are on the Error Page.</h1>
          <h1>Go Back Now!!!</h1>
        </Container>
      </Jumbotron>
    )
}
export default Error; 