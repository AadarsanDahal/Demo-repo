import logo from './logo.svg';
import './App.css';

// Declaring variables
const username = 'aarsan';
const isnameshowing = false;

// Exporting the Person component
 const Person = () => {
  return (
    <>
      <h1>Name: Ram</h1>
      <h1>LastName: Ram</h1>
      <h1>Age: 18</h1>
    </>
  );
}

// Defining the app function and using the Person component
const app = () => {
  return (
    <div className="App">
      <Person/>
    </div>
  );
}

// Using the app function within the main App component
function App() {
  return (
    <div className="App">
      <h1>Hello {isnameshowing ? username : 'Guest'}</h1>
      {username ? (
        <>
          Welcome
 
        </>
      ) : (
        <>
          <h1>This is the no name condition</h1>
        </>
      )}
    </div>
  );
}

export default App;
