import { Component } from 'react'
import { client } from '../../apollo'
import gql from 'graphql-tag'
import debounce from 'lodash.debounce'

class TitleAutocomplete extends Component {
    state = {
        suggestions: null
    }

    componentDidMount() {
        this.debounce = debounce(this.fetchPredictions, 500)
    }

    fetchPredictions = async () => {
        if (this.props.title.length > 1) {
            const data = await client.query({
                query: gql`
                    {
                        autocomplete(pattern: "${this.props.title}") {
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
        value === '' && this.clearSuggetions()

        this.props.changeTitle(value)
        this.debounce()
    }

    handleInputOnBlur = () => {
        !this.mouseOnSuggestion && this.clearSuggetions()
    }

    clearSuggetions = () => this.setState(() => ({ suggestions: null }))

    suggestionClick = suggestion => {
        this.props.onSuggestionClick(suggestion)

        this.clearSuggetions()
    }

    suggestionMouseEnter = () => (this.mouseOnSuggestion = true)

    suggestionMouseLeave = () => (this.mouseOnSuggestion = false)

    getInputProps = () => ({
        onChange: e => this.handleInputChange(e.target.value),
        onBlur: () => this.handleInputOnBlur(),
        value: this.props.title
    })

    getSuggestionProps = suggestion => ({
        onClick: () => this.suggestionClick(suggestion),
        onMouseEnter: () => this.suggestionMouseEnter(),
        onMouseLeave: () => this.suggestionMouseLeave()
    })

    render() {
        return this.props.children({
            titleProps: {
                suggestions: this.state.suggestions,
                getInputProps: this.getInputProps,
                getSuggestionProps: this.getSuggestionProps
            }
        })
    }
}

export default TitleAutocomplete
