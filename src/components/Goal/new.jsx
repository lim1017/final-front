import React from "react";

export default function New(props) {
  return (
    <article className="goalNew goalCard">
      <div className="icons">
        <div className="goal-text" >

        <MUButton
          style={{
            ...style,
            background: button1.color,
            height: 70 - button1.x,
            width: 180 - button1.x,
            margin: button1.x / 2
          }}
          onMouseLeave={() =>
            setButton1({
              ...button1,
              color: "linear-gradient(45deg, #ec407a 30%, #f48fb1 90%)",
              x: 0
            })
          }
          onMouseOver={() =>
            setButton1({
              ...button1,
              color: "linear-gradient(45deg, #f06292 30%, #f8bbd0 90%)"
            })
          }
          onMouseUp={() =>
            setButton1({
              ...button1,
              x: 0
            })
          }
          onMouseDown={() =>
            setButton1({
              ...button1,
              x: 5
            })
          }
         onClick={props.onEdit}
         >
           Create a Goal
        </MUButton>
          
        </div>
      </div>
    </article>
  );
}
