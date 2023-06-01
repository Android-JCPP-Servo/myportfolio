const WideImageCard = props => {
    return (
        <div className="col-md-12 shadow p-3 bg-white rounded center-col">
            <div className="row">
                <div className="col-md-3">
                    <img src={props.img} alt={props.alt} id={props.id}/>
                </div>
                <div className="col-md-6">
                    {props.title && <h1>{props.title}</h1>}
                    {props.p1 && <p>{props.p1}</p>}
                    {props.p2 && <p>{props.p2}</p>}
                    {props.p3 && <p>{props.p3}</p>}
                    <div className="collapse" id="readMore">
                        {props.p4 && <p>{props.p4}</p>}
                        {props.p5 && <p>{props.p5}</p>}
                        {props.p6 && <p>{props.p6}</p>}
                        {props.p7 && <p>{props.p7}</p>}
                        {props.p8 && <p>{props.p8}</p>}
                        {props.p9 && <p>{props.p9}</p>}
                    </div>
                    <button className="btn btn-primary readMore" type="button" data-bs-toggle="collapse" data-bs-target="#readMore" aria-expanded="false" aria-controls="readMore" id="readMoreButton">
                        Read more...
                    </button>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}
 
export default WideImageCard;