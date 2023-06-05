const LinkCard = props => {
    return (
        <div className="col-md-6 bg-white rounded center-col">
            <div className="card shadow bg-white rounded">
                <a className="link" href={props.link}>
                    <div className="card-body row">
                        <div className="col-md-2">
                            <img src={props.img} alt={props.alt} id="byui"/>
                        </div>
                        <div className="col-md-10 inline-block">
                            <h3 className="align-bottom">{props.title}
                            </h3>
                            {props.children[0]}
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
 
export default LinkCard;