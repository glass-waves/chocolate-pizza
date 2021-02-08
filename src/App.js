import { ingredients, buttons } from './data.js';
import './App.css';
import IngredientList from './IngredientList.js';
import ButtonList from './ButtonList.js';

function App() {
  return (
    <div>
      <ButtonList buttons={buttons} />
      <IngredientList ingredients={ingredients}/>
    </div>
  );
}

export default App;
