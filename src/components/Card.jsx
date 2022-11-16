import React from "react";

// //class component yang merender jsx
// export default class Card extends React.Component {
//     constructor(props){
//         super(props)
//     }
//     render(){
//         return (
//             <div>
//                 <img src= {this.props.img} alt="andi" />
//                 <h1> {this.props.title} </h1>
//                 <p> {this.props.content} </p>
//             </div>
//         )
//     }
// }

//functional component

export default function Card({ img, title, content }){
    return (
        <div>
            {img ? <img src={img} alt={title} /> : null }
            <h1>{title}</h1>
            <p>{content}</p>
        </div>
    )
}