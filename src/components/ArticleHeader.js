import React, { Component } from 'react';
import style from './stylesheets/MainSection.module.css';

export default class ArticleHeader extends Component {
    render() {
        return (
            <header className={style.articleHeader}>
                <div>
                    <h1 className={style.title}>Chocolate Pizza</h1>
                    <p className={style.pubInfo}>POSTED ON 15 DEC 2013 / DESSERTS</p>
                </div>
                <div className={style.print}>
                    <img alt="print-icon" src="lab-assets/print-icon.png" />
                    <span>PRINT</span>
                </div>    
            </header>
        )
    }
}
