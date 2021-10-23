import { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "./Redux/cake/cakeActions";

const CakePayloadContainer = ({numOfCake, buyCake}) => {
    const [number, setNumber] = useState(1);
    return ( 
        <div>
            <h1>Number of the cake - {numOfCake}</h1>
            <input type="text" value={number} onChange={({target}) => setNumber(target.value)} />
            <button type="button" onClick={()=> buyCake(number || 1)}>buy {number} cake</button>
        </div>
     );
}
 
const mapStateToProps = (state) =>{
    return {
        numOfCake: state.cakes.numOfCake
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake: number => dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakePayloadContainer);