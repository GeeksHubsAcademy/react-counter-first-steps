import React, { useState,useEffect } from 'react';
const Counter = props => {
    const [state, setState] = useState({
        count: props.initial,
        isRed: false
    });
    useEffect(() => { //componentDidMount
        return  () => {//componentWillUnmount
            console.log('componente desmontado')
        }
    }, []);
    useEffect(() => {//componentDidUpdate
        setState({count:props.initial});
    }, [props.initial]);
    const increment = () => {
        setState({ count: state.count +props.step, isRed: !state.isRed })
    }
    return (
        <div onClick={increment} style={{ color: state.isRed ? 'red' : 'white' }}>
            {state.count}
        </div>
    )
}
export default Counter;