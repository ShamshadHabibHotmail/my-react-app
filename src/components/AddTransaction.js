import React,{useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalStates';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);

    const mySubmit = e =>{
        e.preventDefault();
        
        if(amount === undefined || amount === ''){
            alert('Enter number value');
            return;
        }
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount:+amount
        }
        var txtTransName = document.getElementById('txtValue');
        var txtHidden = document.getElementById('txtHidden').value;
        console.log(txtHidden);
        var result = checkInput(txtTransName.value)
        if( result || result ===undefined ){
            if(txtHidden !== '' ){
                deleteTransaction(txtHidden);
                addTransaction(newTransaction);
                document.getElementById('txtHidden').value = "";
            }else{
                addTransaction(newTransaction);
            }
            
        }else{
            alert("Must provide transaction name...");
            txtTransName.focus();
        }
    }

    const checkInput= (x)=>{
        var regex=/^[a-zA-Z]+$/;
        if (!x.match(regex) || x==='' || x ===undefined)
        {
            
            return false;
        }
    }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={mySubmit}>
                <div className="form-control">
                <label htmlFor="text">Enter transaction name</label>
                <input type="text" id='txtValue' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Pleasea enter name of transaction..." />
                <input type="hidden" id='txtHidden' value="" hidden="true" />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" id="txtNumber" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}
