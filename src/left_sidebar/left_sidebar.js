import React from "react";
// import '../App.css';
import telegram from "../images/telegram.png"
import dashboard from "../images/dashboard_white.png"
import discover from "../images/discover.png"
import users from "../images/users.png"
import documents from "../images/documents.png"
import applications from "../images/apps.png"
import pages from "../images/pages.png"
import support from "../images/support.png"
import inbox from "../images/inbox.png"
import data_list from "../images/data_list.png"
import setting from "../images/setting.png"
import logout from "../images/logout.png"

import down_arrow from "../images/down_arrow.png"
import down_arrow_white from "../images/down_arrow_white.png"
import './left_sidebar.css';

class Left_sidebar extends React.Component{
    
    
    render(){

      return(
        <div className="left_sidebar_content">
            <div className="company_details">
                <img src={telegram} alt="artenis" width="30px" height="30px" />
                <span>Artemis</span>
            </div>

           

            
            <div className="left_sidebar_div1">                
                
                <div className="main_heading">MAIN</div>

                <div className="left_sidebar_main main_active">
                    <div className="left_content">
                        <img src={dashboard} alt=".." width="15px" height="15px" />
                        <span>Dashboard</span>
                    </div>
                    <div className="right_content">
                        <img src={down_arrow_white} alt=".." width="12px" height="12px" />
                    </div>
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={discover} alt=".." width="15px" height="15px" />
                        <span>Discover</span>
                    </div>
                    <div className="right_discover">
                        {/* <img src={down_arrow} width="12px" height="12px" /> */}
                        4
                    </div>
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={users} alt=".." width="15px" height="15px" />
                        <span>Users</span>
                    </div>
                    <div className="right_content">
                        <img src={down_arrow} alt=".." width="12px" height="12px" />
                    </div>
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={documents} alt=".." width="15px" height="15px" />
                        <span>Documents</span>
                    </div>
                    <div className="right_content">
                        <img src={down_arrow} alt=".." width="12px" height="12px" />
                    </div>
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={applications} alt=".." width="15px" height="15px" />
                        <span>Applications</span>
                    </div>
                    <div className="right_content">
                        <img src={down_arrow} alt=".." width="12px" height="12px" />
                    </div>
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={pages} alt=".." width="15px" height="15px" />
                        <span>Pages</span>
                    </div>
                    <div className="right_content">
                        <img src={down_arrow} alt=".." width="12px" height="12px" />
                    </div>
                </div>

            </div>





            {/* ///secondary */}

            <div className="left_sidebar_div2">                
                
                <div className="main_heading">SECONDARY</div>

                <div className="left_sidebar_main ">
                    <div className="left_content">
                        <img src={support} alt=".." width="15px" height="15px" />
                        <span>Support Center</span>
                    </div>
                    {/* <div className="right_content">
                        <img src={down_arrow} width="12px" height="12px" />
                    </div> */}
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={inbox} alt=".." width="15px" height="15px" />
                        <span>Inbox</span>
                    </div>
                    {/* <div className="right_content">
                        <img src={down_arrow} width="12px" height="12px" />
                    </div> */}
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={documents} alt=".." width="15px" height="15px" />
                        <span>File Manager</span>
                    </div>
                    {/* <div className="right_content">
                        <img src={down_arrow} width="12px" height="12px" />
                    </div> */}
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={data_list} alt=".." width="15px" height="15px" />
                        <span>Data List</span>
                    </div>
                    {/* <div className="right_content">
                        <img src={down_arrow} width="12px" height="12px" />
                    </div> */}
                </div>

                
            </div>

            <div className="left_sidebar_div3">                
                
                {/* <div className="main_heading"></div> */}

                <div className="left_sidebar_main ">
                    <div className="left_content">
                        <img src={setting} alt=".." width="15px" height="15px" />
                        <span>Settings</span>
                    </div>
                    {/* <div className="right_content">
                        <img src={down_arrow} width="12px" height="12px" />
                    </div> */}
                </div>

                <div className="left_sidebar_main">
                    <div className="left_content">
                        <img src={logout} alt=".." width="15px" height="15px" />
                        <span>Log Out</span>
                    </div>
                    {/* <div className="right_content">
                        <img src={down_arrow} width="12px" height="12px" />
                    </div> */}
                </div>

                
                
            </div>






            
        </div>

      );          
    }
}

export default Left_sidebar;














