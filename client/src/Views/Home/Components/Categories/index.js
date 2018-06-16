import React from 'react'
import { withRouter } from 'react-router-dom'

import { SearchContext } from '../../../../Components/SearchContext'
import { CategoriesWrapper, Category } from './style'

const categories = ['Music', 'Networking', 'Food', 'Sport', 'Parties']

const Categories = ({ history }) => (
    <SearchContext.Consumer>
        {({ changeState }) => (
            <CategoriesWrapper>
                {categories.map((category, i) => (
                    <Category
                        key={i}
                        onClick={() => {
                            changeState('category', category)
                            history.push('/exploreEvents')
                        }}
                    >
                        {category}
                    </Category>
                ))}
            </CategoriesWrapper>
        )}
    </SearchContext.Consumer>
)

export default withRouter(Categories)
