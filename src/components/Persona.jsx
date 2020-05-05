
import React from 'react'

// const Person = (props) => {
//     return (
//         <div className="Person">
//             Nombre : {props.name}, Apellido: {props.surname}, edad: {props.age}.
//         </div>
//     )
// }
class Person extends React.Component {
    render(){
        return (
            <div className="Person">
                {this.props.children}
                Nombre : {this.props.name}, Apellido: {this.props.surname}, edad: {this.props.age}.
            </div>
        )
    }
}
export default Person;