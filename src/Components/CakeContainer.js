import { connect } from "react-redux";
import { buyCake } from "../Redux";

const CakeContainer = (props) => {
    return (<>
        <h2>Number of Cake - {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy Cakes</button>
    </>  );
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.numOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}
 
export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer);