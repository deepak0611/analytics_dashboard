import React from 'react';
import './transactions_table.css';
import up_arrow from "../images/up_arrow.png";
import down_arrow from "../images/down_arrow.png";

const dataArray =[];
dataArray.push({
    invoice_id: 'M063592DR2',
    date:'08.04.21',
    description: 'Code 5928MDO1',
    status:'Completed',
    descriptions:'$2500.00'
    });
dataArray.push({
    invoice_id: 'M063592DR2',
    date:'08.04.21',
    description: 'Code 5928MDO1',
    status:'Completed',
    descriptions:'$2500.00'
    });
dataArray.push({
    invoice_id: 'M063592DR2',
    date:'08.04.21',
    description: 'Code 5928MDO1',
    status:'Completed',
    descriptions:'$2500.00'
    });
dataArray.push({
    invoice_id: 'M063592DR2',
    date:'08.04.21',
    description: 'Code 5928MDO1',
    status:'Completed',
    descriptions:'$2500.00'
    });
dataArray.push({
    invoice_id: 'M063592DR2',
    date:'08.04.21',
    description: 'Code 5928MDO1',
    status:'Completed',
    descriptions:'$2500.00'
    });

export default class Transactions_table extends React.Component {  

    


  render() {
    return (
      <div className="transactions_table_content">

        <div className="trans_table_heading">
            <input type="checkbox" className="col1" />
            
            <div className="trans_table_heading_item col2">
                <div className="heading_text">Invoice ID</div>
                <div className="sort_column">
                    <img src={up_arrow} alt=".." width="8px" height="8px" />
                    <img src={down_arrow} alt=".." width="8px" height="8px" />
                </div>
            </div>

            <div className="trans_table_heading_item col3">
                <div className="heading_text">Date</div>
                <div className="sort_column">
                    <img src={up_arrow} alt=".." width="8px" height="8px" />
                    <img src={down_arrow} alt=".." width="8px" height="8px" />
                </div>
            </div>

            <div className="trans_table_heading_item col4">
                <div className="heading_text">Description</div>
                <div className="sort_column">
                    <img src={up_arrow} alt=".." width="8px" height="8px" />
                    <img src={down_arrow} alt=".." width="8px" height="8px" />
                </div>
            </div>

            <div className="trans_table_heading_item col5">
                <div className="heading_text">Status</div>
                <div className="sort_column">
                    <img src={up_arrow} alt=".." width="8px" height="8px" />
                    <img src={down_arrow} alt=".." width="8px" height="8px" />
                </div>
            </div>

            <div className="trans_table_heading_item col6">
                <div className="heading_text">Descriptions</div>
                <div className="sort_column">
                    <img src={up_arrow} alt=".." width="8px" height="8px" />
                    <img src={down_arrow} alt=".." width="8px" height="8px" />
                </div>
            </div>

        </div>



        {dataArray.map(data =>(

        <div className="trans_table_heading">
            <input type="checkbox" className="col1" />

            <div className="trans_table_heading_item col2">
                <div className="row_text">M063592DR2</div>
            </div>

            <div className="trans_table_heading_item col3">
                <div className="row_text">08.04.21</div>
            </div>

            <div className="trans_table_heading_item col4">
                <div className="row_text">Code 5928MDO1</div>
            </div>

            <div className="trans_table_heading_item col5">
                <div className="row_status_text">Completed</div>
            </div>

            <div className="trans_table_heading_item col6">
                <div className="row_text">$2500.00</div>
            </div>

        </div>


        ))}



      




      </div>
    );
  }
}