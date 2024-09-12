import React from "react";
import "./todo.css";
import { MdCheck, MdDelete } from "react-icons/md";
function AllElement({content,isChecked,setData,removeData}) {
  return (
    <>
        return (
          <li className="mx-2 p-3 my-5 bg-yellow-600 rounded-lg">
            <span className={isChecked ? "checkTxt" : "unCheckTxt"}>{content}</span>
            <button className="text-2xl mx-12 bg-green-400 rounded-xl p-1" onClick={()=>removeData(content)}>
              <MdCheck />
            </button>
            <button
              className="text-2xl bg-red-500 rounded-xl p-1"
              onClick={() => setData(content)}
            >
              <MdDelete />
            </button>
          </li>
        );
    </>
  );
}

export default AllElement;
