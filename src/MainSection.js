import React from 'react'
import {ingredients} from './data.js'
import ArticleHeader from './ArticleHeader.js'
import ImageSection from './ImageSection.js'
import IngredientList from './IngredientList.js'
import Recipe from './Recipe.js'
import Footer from './Footer.js'

export default class MainSection extends React.Component {
    render() {
        return (
            <main>
                <ArticleHeader />
                <ImageSection />
                <Recipe />
                <IngredientList ingredients={ingredients}/>
            </main>
        )
    }
}
