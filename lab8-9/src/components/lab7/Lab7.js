import logo from './logo.svg';
import StudentCard from './StudentCard';
import UseStateEx from './UseStateEx';
import UseReducerEx from './UseReducerEx';
import UseEffectEx from './UseEffectEx';
import { MyContextProvider } from './MyContext';
import UseContextEx from './UseContextEx';
import UseRefEx from './UseRefEx';
function App() {
  return (
    <div className="App">
      <header className="App-header">
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
