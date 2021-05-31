import React from "react";
// import '../App.css';
import more_option from "../images/more.png"
import './users.css';

const data = [];

data.push(40);
data.push(100);
data.push(40);
data.push(100);
data.push(60);
data.push(80);
data.push(40);
data.push(80);


class Users extends React.Component{
    
    
    render(){

      return(
        <div className="total_income_content">
            <div className="income_div1">
                <span>New Users</span>
                {/* <span>...</span> */}
                <img src={more_option} alt="deepak" width="20px" height="15px" />
            </div>
            <div className="income_div2">
                <span className="earning">94.2%</span>
                <span className="growthpercent">+6.9%</span>
            </div>
            

            <div className="users_div3">
               {data.map(value => (
                   <div className="vertical_bar">
                       <div className="vertical_progress" style={{height:`${value}%`}}>
                       </div>
                   </div>

               ))}
            </div>

            
        </div>

      );          
    }
}

export default Users;














