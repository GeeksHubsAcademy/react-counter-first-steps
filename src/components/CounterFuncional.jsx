import React, { useState,useEffect } from 'react';
const Counter = props => {
    const [state, setState] = useState({
        count: props.inicial,
        isRed: false
    });
    useEffect(() => { //componentDidMount
        return  () => {//componentWillUnmount
            console.log('componente desmontado')
        }
    }, [])
    useEffect(() => {//componentDidUpdate
        setState({count:props.inicial})
    }, [props.inicial])
    const increment = () => {
        setState({ count: state.count + 1, isRed: !state.isRed })
    }
    return (
        <div onClick={increment} style={{ color: state.isRed ? 'red' : 'white' }}>
            {state.count}
        </div>
    )
}
export default Counter;