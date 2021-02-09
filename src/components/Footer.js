import React, { Component } from 'react';
import style from './stylesheets/Footer.module.css';

export default class Footer extends Component {
	render() {
		return (
			<footer>
				<div style={{ backgroundImage: `url("lab-assets/hr-img.png")`, height: `20px`}}></div>
				<div className={style.footerContent}>
					<img alt="author" src="lab-assets/van-pic.png" />
					 <div className={style.authorInfo}>
						 <h4>Vanessa Stevenson</h4>
						 <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
					 </div>
					 <button>SHARE RECIPE</button>
				</div>

				<span className={style.logoDivider}>
					 <hr className={style.hr} />
					 <img alt="small logo" src="lab-assets/small-logo.png"/>
					 <hr className={style.hr}/>
				</span>

				<div className={style.credits}>
					 <p>Delicious © 2013 | All Rights Reserved.</p>
					 <p>Proudly published with Ghost.</p>
				</div>

			</footer>
		)
	}
}
