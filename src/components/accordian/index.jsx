import { useState } from "react"
import data from "./data";
import './styles.css';


export default function Accordian() {

  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multipleIds, setMultipleIds] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId == selected ? null : getCurrentId);
  }


  console.log(selected);

  return (
  <div className="wrapper">
    <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
    <div className="accordian">
       {data && data.length > 0 ? (
          data.map(dataItem => (
          <div className="item">
            <div onClick={() => handleSingleSelection(dataItem.id)} className="title">
              <h3>{dataItem.question}</h3>
              <span>+</span>
            </div>
            {
              selected == dataItem.id ?
              <div className="content">{dataItem.answer}</div>  
              : null
            }
        </div>
          ))
        ) : (
            <div>No data found !</div>
          )
        }
    </div>
  </div>
)}