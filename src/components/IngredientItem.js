import React from 'react'
import style from './stylesheets/IngredientList.module.css'

export default class IngredientItem extends React.Component {
	render() {
		return (
			<li className={style.item}>
				{this.props.amount} {this.props.name}
			</li>
		);
	}
}
