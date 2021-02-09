import { ingredients, buttons } from './data.js';
import Header from "./Header.js";
import './App.css';
import IngredientList from './IngredientList.js';
import ButtonList from './ButtonList.js';

function App() {
  return (
    <div>
      <Header />
      <IngredientList ingredients={ingredients}/>
    </div>
  );
}

export default App;
