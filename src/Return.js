import { useHistory } from "react-router-dom";

const Return = () => {
    let history = useHistory();
    return (
        <div className="col-md-3 shadow p-3 bg-white rounded center-col">
            <div className="row">
                <div className="col-md-12 text-center">
                    <button onClick={history.goBack} className="btn btn-primary w-100">Return Home</button>
                </div>
            </div>
        </div>
    );
}
 
export default Return;