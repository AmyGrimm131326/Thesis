import Icons from './Icons'
import Contact from './Contact'
import Button from './Button'

// this is my footer where I made three different components and rendered them to the footer.
const Footer = () => {
    return (
        <footer className="footer container-fluid">
            <div className="row bg-dark">
                <Icons />
                <Contact />
                <Button />
            </div>
        </footer>
    )
}
export default Footer; 