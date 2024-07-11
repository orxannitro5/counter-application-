import "./Counter.css"
import { useDispatch,useSelector } from "react-redux"
import { Increment } from "./Redux/counterAction"
import { Decrement } from "./Redux/counterAction"
const Counter = ()=>{
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    return (
        <div className="counter-app">
            <h1 className="counter-app-title">My Counter Application</h1>
            <div className="counter-app-content">
                <button className="increment" onClick={()=> dispatch(Increment()) }>INCREMENT</button>
                <span>{counter}</span>
                <button className="decrement"  onClick={()=> dispatch(Decrement()) }>DECREMENT</button>
            </div>
        </div>
    )
}
export default Counter