import React from "react";


function Todos({ name }) {
    return (
      <ul>
        {
            name.map((item,index)=>(
                <li key={index}>{item.task}</li>
            ))
        }
      </ul>
    )
}

export default Todos;