import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalStates';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction=>transaction.amount);
    const total = amounts.reduce((counter,item)=>(counter+=item),0).toFixed(2);
    return (
        <>
        <h4>
            Your Balance
        </h4>
    <h1>£{total}</h1>
        </>
    )
}
