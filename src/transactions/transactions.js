import React from "react";
// import '../App.css';
import down_arrow from "../images/down_arrow.png";
import export_icon from "../images/export.png";
import './transactions.css';
import Transactions_table from "./transactions_table";

class Transactions extends React.Component{
    
    
    render(){

      return(
        <div className="transactions_content">
            
            <div className="transactions_div1">
                <div className="transactions_heading">
                    <div className="transactions_heading_text">
                        Recent Transactions
                    </div>
                    <div className="transactions_heading_export">
                        <img src={export_icon} alt=".." width="12px" height="12px" />
                        <span>Export</span>                        
                    </div>
                </div>

            </div>
 
            <div className="transactions_div2">

                <div className="incoming active_transaction">
                    Incoming
                </div>
                <div className="invoice">
                    Invoices
                </div>                               

            </div>

            <div className="transactions_div3">
                <Transactions_table />

            </div>

            

            
        </div>

      );          
    }
}

export default Transactions;














