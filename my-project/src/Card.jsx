import React from "react";

function Card(props) {
  let age=props.age;
  function myAge(){
    return age > 18 ? <button className="p-3 my-2 border-2 border-black">Watch Now</button>: <p className="text-red-600 m-2">"This Web Series Not avaiable in your region"</p>;
  }

  return (
    <>
      <div className="myclass">
        <div className="w-1/3 h-4/5 text-center border-2 border-black my-5 mx-5">
          <img
            className="mx-28 py-3 w-72"
            width="400px"
            height="400px"
            src={props.url}
            alt="demo_img"
          />
          <h1 className="mx-3 text-red-600 text-4xl ">{props.name}</h1>
          <p className="text-sky-600">
            Stranger Things is an American science fiction horror drama
            television series created by the Duffer Brothers for Netflix.
            Produced by Monkey Massacre Productions and 21 Laps Entertainment,
            the first season was released on Netflix on July 15, 2016. The
            second and third seasons followed in October 2017 and July 2019
            respectively, and the fourth season was released in two parts in May
            and July 2022. The fifth and final season of Stranger Things is
            expected to be released in 2025.
          </p>
          {myAge()}
        </div>
      </div>
    </>
  );
}

export default Card;
