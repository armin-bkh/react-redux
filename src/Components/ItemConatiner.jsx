import { connect } from "react-redux";
import { buyCake } from "./Redux/cake/cakeActions";
import { buyIceCream } from "./Redux/iceCream/iceCreamActions";

const ItemContainer = (props) => {
    return ( 
        <div>
            <h1>item - {props.item}</h1>
            <h1>{props.number}</h1>
            <button type="button" onClick={props.buyItems}>buy items</button>
        </div>
     );
}
 
const mapStateToProps = (state, ownProps) =>{
    const itemProps = ownProps.cake ? state.cakes.numOfCake : state.iceCreams.numOfIceCream;
    return { item: itemProps }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    const itemDispatch = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());
    return { buyItems: itemDispatch }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);