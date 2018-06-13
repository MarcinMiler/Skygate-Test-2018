import { Component } from 'react'
import { client } from '../../apollo'
import gql from 'graphql-tag'
import debounce from 'lodash.debounce'

class TitleAutocomplete extends Component {
    state = {
        suggestions: null,
        inputValue: ''
    }

    componentDidMount() {
        this.debounce = debounce(this.fetchPredictions, 500)
    }

    fetchPredictions = async () => {
        if (this.state.inputValue.length > 1) {
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
    }

    handleInputChange = value => {
        if (value === '') {
            this.clearSuggetions()
        }
        this.onChange(value)
        this.setState({ inputValue: value })
        this.debounce()
    }

    onChange = value => {
        this.props.onChange && this.props.onChange(value)
    }

    handleInputOnBlur = () => {
        !this.mouseOnSuggestion && this.clearSuggetions()
    }

    clearSuggetions = () => this.setState(() => ({ suggestions: null }))

    suggestionClick = suggestion => {
        this.onChange(suggestion.title)

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

export default TitleAutocomplete
