import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<footer>
				 <div className="image-border"></div>
				 <div>
					 <img alt="author" src="lab-assets/van-pic.png" />
					 <div>
						 <h4>Vanessa Stevenson</h4>
						 <p>Food enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.</p>
					 </div>
					 <button>SHARE RECIPE</button>
				 </div>

				 <div>
					 <hr />
					 <img alt="small logo" src="lab-assets/small-logo.png"/>
				 </div>

				 <div>
					 <p>Copyright</p>
					 <p>Proudly published with Ghost.</p>
				</div>

			</footer>
		)
	}
}
