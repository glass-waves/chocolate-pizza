import React from 'react';
import IngredientItem from './IngredientItem.js';

export default class IngredientList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.ingredients.map( ingredient =>
					<IngredientItem name={ingredient.name} amount={ingredient.amount} />)}
			</ul>
		)
	}
}
