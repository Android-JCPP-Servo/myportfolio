const Container = props => {
    return (
        <div className="container mb-5">
            <div className="row">{props.children}</div>
        </div>
    );
}
 
export default Container;