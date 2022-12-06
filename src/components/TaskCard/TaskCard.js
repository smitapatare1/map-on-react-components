import React from "react";
import "./TaskCard.css"
function TaskCard({title}){
    return(
        <div className="container">
            {title}
        </div>
    )
}
export default TaskCard