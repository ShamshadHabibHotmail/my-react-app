import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalStates';
import {Transaction} from './Transaction'

export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
            <span hidden={transactions.length>0?true:false} className="only">Please add new transaction</span>
            <ul className="list">  
                {transactions.map(transaction=>(<Transaction key={transaction.id} transaction={transaction}/>))}
            </ul>
        </>
    )
}
