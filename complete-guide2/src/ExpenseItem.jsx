
import React,{useState} from "react";
import './ExpenseItem.css';
import { DisplayDate } from "./DisplayDate";
import { DisplayExpenses } from "./DisplayExpenses";
import { Button } from "./Button";


export function ExpenseItem(props) {

   let originalTitle = props.title
let [title, setTitle] = useState(props.title)
 const SayHello = ()=>{
    title ==='Ohdy'?setTitle(originalTitle):setTitle('Ohdy')
 }
    return (
       <>
       <div className ="expense-item">
        
        <DisplayDate date = {props.date}></DisplayDate>
            
        <div className="expense-item__description">
            <h2>{title}</h2>
               
        </div>
        <div className="expense-item__price">
        <DisplayExpenses amount= {props.amount} ></DisplayExpenses>

        </div>

        <Button onClick={SayHello} ></Button>

       </div>
      
       </>
    )

}
