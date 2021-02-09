import React, { Component } from 'react'
import ButtonList from './ButtonList.js';
import { buttons } from './data.js';

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="top-header">
                    <div>
                        <img alt="logo" src="lab-assets/logo.png"/>
                            <div>
                                <h2>Delicious</h2>
                                <p>THE BEST FOOD BLOG ON THE WEB.</p>
                            </div>
                    </div>
                    <ButtonList buttons = {buttons} />
                </div>
                <div className="image-border">
                </div>
            </header>
        )
    }
}
