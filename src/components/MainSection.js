import React from 'react'
import {ingredients} from '../data.js'
import style from './stylesheets/MainSection.module.css'
import ArticleHeader from './ArticleHeader.js'
import ImageSection from './ImageSection.js'
import IngredientList from './IngredientList.js'
import Recipe from './Recipe.js'

export default class MainSection extends React.Component {
    render() {
        return (
            <main className={style.mainSection}>
                <ArticleHeader />
                <ImageSection />
                <Recipe />
                <IngredientList ingredients={ingredients}/>
            </main>
        )
    }
}
