import React, { Component } from 'react'

export default class ArticleHeader extends Component {
    render() {
        return (
            <header>
                <div>
                    <h1>Chocolate Pizza</h1>
                    <p>POSTED ON 15 DEC 2013/ DESERTS</p>
                </div>
                <div>
                    <img alt="print-icon" src="lab-assets/print-icon.png" />
                    <span>PRINT</span>
                </div>    
            </header>
        )
    }
}
