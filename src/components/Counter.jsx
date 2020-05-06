import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.inicial,
            isRed: false,
            movies:[{},{},{}]
        }
    }
    componentDidMount(){//casi como el ngOnInit, pero es equivalente a ngAfterViewInit
        console.log('componente montado',this.props.inicial)
    }
    componentDidUpdate(prevProps,prevState){// ngOnChanges y ngDoCheck
        if(prevProps.inicial!==this.props.inicial){
            this.setState({count:this.props.inicial})
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
                 </div>
        )
    }
}