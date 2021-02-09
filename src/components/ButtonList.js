import React from 'react';
import style from './stylesheets/Header.module.css'

export default class ButtonList extends React.Component {
	render() {
		return (
			<div className={style.buttonList}>
				{ this.props.buttons.map(
					button =>
						<a href={button.href}><img src={button.image} alt="social-media link" /></a>
				)}
			</div>
		)
	}
}
