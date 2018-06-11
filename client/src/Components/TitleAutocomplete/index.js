import React, { Component } from 'react'
import { client } from '../../apollo'
import gql from 'graphql-tag'
import debounce from 'lodash.debounce'

export class TitleAutocomplete extends Component {
    state = {
        suggestions: null,
        inputValue: ''
    }

    componentDidMount() {
        this.debounce = debounce(this.fetchPredictions, 500)
    }

    fetchPredictions = async () => {
        const data = await client.query({
            query: gql`
                {
                    autocomplete(pattern: "${this.state.inputValue}") {
                        id
                        title
                    }
                }
            `
        })
        this.setState(() => ({ suggestions: data.data.autocomplete }))
    }

    handleInputChange = value => {
        this.setState(() => ({ inputValue: value }))
        this.debounce()
    }

    handleInputOnBlur = () => {
        !this.mouseOnSuggestion && this.clearSuggetions()
    }

    clearSuggetions = () => this.setState(() => ({ suggestions: null }))

    suggestionClick = suggestion => {
        this.setState(() => ({ inputValue: suggestion.title }))
        this.clearSuggetions()
    }

    suggestionMouseEnter = () => (this.mouseOnSuggestion = true)

    suggestionMouseLeave = () => (this.mouseOnSuggestion = false)

    getSearchInputProps = () => ({
        onChange: e => this.handleInputChange(e.target.value),
        onBlur: () => this.handleInputOnBlur(),
        value: this.state.inputValue
    })

    getSuggestionItemProps = suggestion => ({
        onClick: () => this.suggestionClick(suggestion),
        onMouseEnter: () => this.suggestionMouseEnter(),
        onMouseLeave: () => this.suggestionMouseLeave()
    })

    render() {
        return this.props.children({
            titleSuggestions: this.state.suggestions,
            getSearchTitleInputProps: this.getSearchInputProps,
            getSuggestionTitleItemProps: this.getSuggestionItemProps
        })
    }
}
