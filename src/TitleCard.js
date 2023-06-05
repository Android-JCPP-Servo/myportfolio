const TitleCard = props => {
    return (
        <div className="col-md-3 shadow p-3 bg-white rounded center-col">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h2>{props.pageTitle}</h2>
                </div>
            </div>
        </div>
    );
}
 
export default TitleCard;