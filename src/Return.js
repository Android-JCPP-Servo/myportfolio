import { Link } from "react-router-dom";

const Return = () => {
    return (
        <div className="col-md-3 shadow p-3 bg-white rounded center-col">
            <div className="row">
                <div className="col-md-12 text-center">
                    <Link to="/">
                        <button className="btn btn-primary w-100">
                            Return Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
 
export default Return;