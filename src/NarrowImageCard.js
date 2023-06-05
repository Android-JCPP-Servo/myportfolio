import {Link} from 'react-router-dom'

const NarrowImageCard = props => {
    return (
        <div className="col-sm-3 center-col">
            <div className="card shadow bg-white rounded">
                <div className="card-body">
                    <img src={props.src} alt={props.alt} id={props.id} />
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <Link to={props.toPage} className="btn btn-primary">{props.btnText}</Link>
                </div>
            </div>
        </div>
    );
}
 
export default NarrowImageCard;