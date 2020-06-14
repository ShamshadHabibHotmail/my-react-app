import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalStates';


export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount <0 ?'-':'+'

    const editTransaction = (transaction)=>{
        // console.log('My Edit '+JSON.stringify(transaction));
        //{"id":12287586,"text":"First","amount":12}

        //deleteTransaction(transaction.id);
    } 
    return (
        <a href="#" onClick={()=>editTransaction(transaction)}><li className={transaction.amount<0?"minus":"plus"}>
                {transaction.text} <span>{sign}£{Math.abs(transaction.amount)} </span><button 
                onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
                </li></a>
    )
}
