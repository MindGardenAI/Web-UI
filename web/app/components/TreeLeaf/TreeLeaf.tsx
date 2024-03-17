import React from "react";
import './css.css'
const TreeLeaf = (inputs: {title:string, content:string}) => {
    return(
    <>
    <div className="card w-96 bg-base-100 shadow-xl  p-3">
  <div className="card-body">
    <h1 className="card-title font-bold">{inputs.title}</h1>
    <hr />
    <p className="card-wrap">{inputs.content}</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
    </>    
    );
};


export default TreeLeaf;  
