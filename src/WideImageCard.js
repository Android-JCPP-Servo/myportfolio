const WideImageCard = props => {
    const rowsOuter = [];
    const rowsInner = [];
    for (let i = 1; i < props.children.length; i++) {
        if (i >= 5) {
            rowsInner.push(props.children[i]);
        } else {
            rowsOuter.push(props.children[i]);
        }
    }
    const handleInnerText = (e) => {
        if (e.target.innerText == "Read more...") {
            e.target.innerText = "Read less...";
        } else {
            e.target.innerText = "Read more...";
        }
    }
    return (
        <div className="col-md-12 shadow p-3 bg-white rounded center-col">
            <div className="row">
                <div className="col-md-3">
                    {props.children[0]}
                </div>
                <div className="col-md-6">
                    {rowsOuter.length != 0 && rowsOuter}
                    {
                       rowsInner.length != 0 && <div>
                          <div className="collapse" id="readMore">{rowsInner}</div>
                          <button className="btn btn-primary readMore" type="button" data-bs-toggle="collapse" data-bs-target="#readMore" aria-expanded="false" aria-controls="readMore" id="readMoreButton" onClick={handleInnerText}>Read more...</button>
                       </div>
                    }
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}
 
export default WideImageCard;