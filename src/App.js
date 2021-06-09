//import logo from './logo.svg';
import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './components/form.css';

function App() {
  return (
    <div style={{                 
      backgroundImage: `url("background.jpg")`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover"     
    }}>
    
    <div className="container contapp">
  <div><marquee><i><h5> Aunty Maggie's Expense Tracker Application</h5></i></marquee>
      <div className="row">
        <div className="col-md-5">
        <h6>Daily Expense</h6>
          <UserForm />
        </div>

        <div className="col-md-7">
       <h6>Expense Records</h6>
          <UserList />
        </div>
      </div>
    </div>
    </div>  
    </div> 

  );
}

export default App;
