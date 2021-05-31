import React from "react";
// import '../App.css';
import more_option from "../images/more.png"
import './total_income.css';

class Total_income extends React.Component{
    
    
    render(){

      return(
        <div className="total_income_content">
            <div className="income_div1">
                <span>Total Income</span>
                {/* <span>...</span> */}
                <img src={more_option} alt="deepak" width="20px" height="15px" />
            </div>
            <div className="income_div2">
                <span className="earning">$124,563.00</span>
                <span className="growthpercent">+6.9%</span>
            </div>
            <div className="progressbar">
                <div className="progress">

                </div>
            </div>
            {/* <progress value="60" max="100" className="progressbar"></progress> */}

            <div className="income_div4">
               Yearly  Goal
            </div>

            
        </div>

      );          
    }
}

export default Total_income;














