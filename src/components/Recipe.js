import React, { Component } from 'react'
import style from './stylesheets/MainSection.module.css'

export default class Recipe extends Component {
	render() {
		return (
			<article className={style.recipeText}>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia neque enim, a consequat magna blandit sed. Sed fringilla hendrerit diam nec rutrum. Sed tortor ante, maximus non tellus vel, malesuada fermentum velit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vulputate nulla vel est aliquet, eget feugiat tortor porta. Donec facilisis sed nisl ut convallis. Proin non placerat dolor. Quisque in tempus quam. Sed iaculis justo a enim sollicitudin consectetur. In hac habitasse platea dictumst. Nulla convallis rhoncus risus vel luctus. Etiam aliquet eleifend eleifend. Morbi finibus, est eget lobortis aliquet, leo tortor laoreet lorem, et venenatis leo elit condimentum quam. Donec imperdiet elit ut neque malesuada, eu auctor urna pharetra. Aliquam erat volutpat.</p>

				<p>Sed non scelerisque lorem. Integer nec porttitor orci. Mauris sed pellentesque tellus, non finibus augue. Fusce malesuada lorem quis gravida viverra. Donec eu tortor eleifend nunc pharetra elementum. Aenean a rhoncus libero, finibus ullamcorper nisi. Integer suscipit enim non ex tincidunt tempor. Integer et purus ac orci sagittis fermentum. Cras vitae pellentesque tellus. Suspendisse et hendrerit nulla. Ut sed placerat sapien. Phasellus non feugiat libero. Phasellus condimentum nisi eget erat hendrerit, varius accumsan orci porta. Suspendisse finibus nisl eu bibendum pulvinar. Aenean tristique erat nec ligula aliquet, vitae bibendum est molestie. Vestibulum accumsan posuere eleifend.</p>

				<p>Cras eu est vel tellus malesuada tristique molestie sit amet tellus. Vivamus condimentum mauris nec nisl semper, pulvinar tincidunt dui suscipit. Nam sapien lacus, aliquet sed erat nec, malesuada ullamcorper urna. Maecenas auctor enim quam. Nullam rutrum neque odio, vitae vehicula nulla pellentesque et. In et justo consectetur orci iaculis egestas ac quis arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed placerat purus sed enim bibendum pretium. Aliquam imperdiet, nunc in tempus gravida, quam neque facilisis sapien, ac gravida erat ante vel sem. Curabitur nec sollicitudin massa. Vestibulum imperdiet congue lectus ut sodales. Donec vitae egestas tellus. Duis mattis sapien eget quam convallis, vitae laoreet est sagittis. Integer feugiat condimentum diam. Phasellus nec condimentum orci. Donec et est justo.</p>
				
			</article>
		)
	}
}
