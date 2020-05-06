import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.initial,
            isRed: false,
            movies:[{},{},{}],
        }
    }
    componentDidMount(){//casi como el ngOnInit, pero es equivalente a ngAfterViewInit
        console.log('componente montado',this.props.initial)
        console.log(this.props.stepRef?.current)
        this.props.stepRef.current.focus()
    }
    componentDidUpdate(prevProps,prevState){// ngOnChanges y ngDoCheck
        if(prevProps.initial!==this.props.initial){
            this.setState({count:this.props.initial})
        }
    }
    componentWillUnmount(){//ngOnDestroy
        console.log('componente desmontado')
    }
    increment = () => {
        this.setState({ count: this.state.count + 1, isRed: !this.state.isRed })
    }
    render() {
        return (
            <div onClick={this.increment} 
            style={{ color: this.state.isRed ? 'red' : 'white' }}>
                {this.state.count}
                {this.props.children}
                 </div>
        )
    }
}