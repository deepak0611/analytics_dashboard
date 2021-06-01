
import './App.css';
import Total_income from './total_income/total_income';
import Top_navbar from './top_navbar/top_navbar';
import Left_sidebar from './left_sidebar/left_sidebar';
import Main_top_right from './main_top_right/main_top_right';
import Transactions from './transactions/transactions';
import Users from './users/users';

function App() {
  return (
    <div className="full_body">
      <div className="left_sidebar">
        <Left_sidebar />
      </div>

      <div className="right_sidebar">

        <div className="top_navbar">
          <Top_navbar />
        </div>

        <div className="main_body">

          <div className="main_top">
            <div className="main_top_left">
              <div className="total_income">
                <Total_income/>
                {/* deepak */}
              </div>
              <div className="new_users">
                <Users />
              </div>
            </div>
            <div className="main_top_right">
              <Main_top_right />
            </div>

          </div>
          <div className="main_bottom">
            <Transactions />
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
