import React, { Component } from 'react';
import style from './stylesheets/Header.module.css';
import ButtonList from './ButtonList.js';
import { buttons } from '../data.js';

export default class Header extends Component {
    render() {
        return (
            <header className={style.header}>
                <div className={style.topHeader}>
                    <div className={style.masthead}>
                        <img alt="logo" src="lab-assets/logo.png"/>
                        <div className={style.siteName}>
                            <h2>Delicious</h2>
                            <p>THE BEST FOOD BLOG ON THE WEB</p>
                        </div>
                    </div>
                    <ButtonList buttons={buttons} />
                </div>
                <div style={{ backgroundImage: `url("lab-assets/hr-img.png")`}} className={style.imageBorder}>
                </div>
            </header>
        )
    }
}
