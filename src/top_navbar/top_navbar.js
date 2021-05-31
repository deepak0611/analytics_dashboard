import React from "react";
import './top_navbar.css';
import search from "../images/search.png"
import setting from "../images/setting.png"
import message from "../images/message.png"
import bell from "../images/bell.png"
import down_arrow from "../images/down_arrow.png"
import deep from "../images/profile.jpeg"

class Top_navbar extends React.Component{
    
    
    render(){
 
      return(
        <div className="top_navbar_content">
            
            <div className="navbar_div1">
                <img src={search} alt="search" width="30px" height="30px" />
                <input type="text" placeholder="Type to search..." />
            </div>

            <div className="navbar_divx">

                <div className="navbar_div2">
                    <div className="navbar_icons">
                        <img src={setting} alt="setting" width="20px" height="20px" />
                        <img src={message} alt="message" width="20px" height="20px" />
                        <img src={bell} alt="bell" width="20px" height="20px" />
                    </div>
                </div>
                <div className="navbar_div3">
                    <div className="user_details">
                        <div className="user_name">Thomas Brown</div>
                        <div className="user_designation">Developer</div>
                    </div>
                    <div className="user_options">
                        <img  src={deep} alt="user" className="user_image" >
                        </img>
                        <img src={down_arrow} alt=".." width="12px" height="12px"/>
                    </div>

                </div>

            </div>
            
        </div>

      );          
    }
}

export default Top_navbar;














