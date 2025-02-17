import logo from './logo.svg';
import './App.css';
import StudentCard from './components/StudentCard';
import UseStateEx from './components/UseStateEx';
import UseReducerEx from './components/UseReducerEx';
import UseEffectEx from './components/UseEffectEx';
import { MyContextProvider } from './components/MyContext';
import UseContextEx from './components/UseContextEx';
import UseRefEx from './components/UseRefEx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Laboratoria 7</h1>
        <p>
          Zadanie 1
        </p>
        <div className="StudentList">
          <h1>Student List</h1>
          <StudentCard name="Artur" lastName="Grodel" age={24} major="Informatyka" />
            <StudentCard name="Anna" lastName="Nowacka" age={23} major="Chemia" />
            <StudentCard name="Kacper" lastName="Kowalski" age={23} major="Matematyka" />
            <StudentCard name="Dominik" lastName="Nowak" age={23} major="Polski" />

        </div>
        <p>
          Zadanie 2
        </p>
        <div className="Zad2">
                <h1>React Hook Examples</h1>
                <MyContextProvider>
                <UseStateEx />
                <UseReducerEx />
                <UseEffectEx />
                <UseContextEx />
                <UseRefEx />
                </MyContextProvider>
            </div>
            
      </header>
      
    </div>
    

  );
}

export default App;
