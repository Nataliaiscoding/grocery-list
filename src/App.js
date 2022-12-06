import './App.css';
import image from './shopping.webp';
import imageTwo from './man.webp';
import { GroceryList } from './GroceryLIst';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <img src={image} width="200px" alt="shoping"/>
      </div>
      <div className='container'>
      <h1>Grocery List</h1>
      </div>
      <GroceryList/>
      <div className='container'>
      <img src={imageTwo} width="200px" alt="man"/>
      </div>
    </div>
  );
}

export default App;
