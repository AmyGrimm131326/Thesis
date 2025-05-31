// this is my icons component I made to render in my footer.
const Icons = () => {
    
    return (
        <div className="col-md-4 my-3">
            <p className="text-danger fontTwo mt-2">Follow us for exclusive deals:
                    <br />
                <a href="#"><i className="text-success fab fa-facebook mr-4 icons"></i></a>
                <a href="#"><i className="text-success fab fa-instagram mr-4 icons"></i></a>
                <a href="#"><i className="text-success fab fa-snapchat mr-4 icons"></i></a>
                <a href="#"><i className="text-success fab fa-twitter icons"></i></a>
            </p>
        </div>
    )
}
export default Icons; 