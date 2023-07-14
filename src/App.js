import './App.css';
import Button from './components/prob1';
import Avatar from './components/prob2';


function App() {
  return (
    <div className="Button">
      <h1>Problem one: REUSABLE BUTTTON FUNCTIONALITY</h1>
      <Button title="Add To Cart" />
      <Button title="Find Out More" />
      <Avatar user={users} />
      

     
    </div>
      
  );
}

export default App;
