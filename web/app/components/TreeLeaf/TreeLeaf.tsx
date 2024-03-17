import React from "react";
import './css.css'
import Image from "next/image";
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

<div className="flex justify-center">
<Image
src={'/images/stem.png'}
width="0"
height="0"
sizes="5vw"
style={{ width: '5%', height: '30px' }}
alt={""}
className="m-0"
/>   
</div>

</>
    );
};


export default TreeLeaf;  
