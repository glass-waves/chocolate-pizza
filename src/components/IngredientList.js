import React from 'react';
import style from './stylesheets/IngredientList.module.css'
import IngredientItem from './IngredientItem.js'

export default class IngredientList extends React.Component {
	render() {
		return (
			<ul style={{ backgroundImage: `url("lab-assets/list-bg.png")`}} className={style.list}>
				{this.props.ingredients.map( ingredient =>
					<IngredientItem name={ingredient.name} amount={ingredient.amount} />)}
			</ul>
		)
	}
}
