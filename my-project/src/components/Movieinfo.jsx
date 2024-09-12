import React from 'react'

function Movieinfo(props) {
    const{id,name,url,info,rating,link}=props.data;
    const color={
      padding:"12px"
    };
    const btn={
      backgroundColor:`${rating > 6 ? "#57e32c" : "#ffa534"}`
    };
    let colorData=rating > 6 ? "super_hit" : "average";
  return (
      <li>
        <img src={url} alt="" />
        <h2>Title:-{name}</h2>
        <h3>Rating:-<span className={colorData}>{rating}</span></h3>
        <p>Details:-{info}</p>
        <a href={link}><button className='mybtn'>Watch Now</button></a>
      </li>
  

  )
}

export default Movieinfo;