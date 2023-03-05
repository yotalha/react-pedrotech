import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

function Job(props) {
  return (
    <div>
      <h1>Salary: {props.salary}</h1>
      <h2>Position: {props.position}</h2>
      <h2>Company: {props.company}</h2>
    </div>
  )
}

export default App;
