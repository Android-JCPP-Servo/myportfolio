const TitleCard = props => {
    return (
        <div className="col-md-4 shadow p-3 bg-white rounded center-col">
            <div className="row">
                <div className="col-md-12 text-start">
                    <h2>{props.pageTitle}</h2>
                    {props.children && 
                        <div className="row work-social">
                            <div className="col-md-12">{props.children[0]}</div>
                            <div className="col-md-12">{props.children[1]}</div>
                            <div className="col-md-12">{props.children[2]}</div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}
 
export default TitleCard;