import React from "react";
// import '../App.css';
import down_arrow from "../images/down_arrow.png"
import Area_chart from "./area_chart";
import './main_top_right.css';

class Main_top_right extends React.Component{
    
    
    render(){

      return(
        <div className="main_top_right_content">
            
            <div className="top_right_div1">
                <div className="balance">
                    <div className="balance_text">
                        Balance
                    </div>
                    <div className="balance_month">
                        <span>Monthly</span>
                        <img src={down_arrow} alt=".." width="8px" height="8px" />
                    </div>
                </div>

            </div>

            <div className="top_right_div2">

                <div className="earnings">
                    <div className="earnings_text">
                        Earnings
                    </div>
                    <div className="earnings_value">
                        <div className="earnings_percent">
                            43.41%
                        </div>
                        <div className="earnings_increment">
                            +2.5%
                        </div>
                    </div>
                </div>

                <div className="sales">
                    <div className="sales_text">
                        Sales Value
                    </div>
                    <div className="sales_value">
                        <div className="sales_percent">
                            $95,422
                        </div>
                        <div className="sales_increment">
                            +13.5%
                        </div>
                    </div>
                </div>

            </div>

            <div className="top_right_div3">
                <Area_chart/>
 
            </div>

            

            
        </div>

      );          
    }
}

export default Main_top_right;














