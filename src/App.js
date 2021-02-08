import { ingredients } from './data.js';
import './App.css';
import IngredientList from './IngredientList.js';

function App() {
  return (
    <div>
      <IngredientList ingredients={ingredients}/>
    </div>
  );
}

export default App;
