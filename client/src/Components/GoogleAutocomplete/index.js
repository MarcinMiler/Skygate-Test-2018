import { Component } from 'react'
import debounce from 'lodash.debounce'

export const geoCode = address => {
    this.geocoder = new window.google.maps.Geocoder()

    return new Promise((resolve, reject) => {
        this.geocoder.geocode({ address }, (results, status) => {
            resolve(results)
        })
    })
}

export class GoogleAutocomplete extends Component {
    state = {
        suggestions: null,
        inputValue: ''
    }

    componentDidMount() {
        this.autoComplete = new window.google.maps.places.AutocompleteService()
        this.debounce = debounce(this.fetchPredictions, 500)
    }

    fetchPredictions = () => {
        const { inputValue } = this.state
        if (inputValue.length) {
            this.autoComplete.getPlacePredictions(
                { input: inputValue },
                this.autoCompleteCallback
            )
        }
    }

    autoCompleteCallback = (predictions, status) => {
        if (predictions) {
            this.setState({
                suggestions: predictions.map((prediction, i) => ({
                    id: prediction.id,
                    description: prediction.description,
                    terms: prediction.terms
                }))
            })
        }
    }

    clearSuggestions = () => this.setState(() => ({ suggestions: null }))

    onChange = value => {
        this.props.onChange && this.props.onChange(value)
    }

    handleInputChange = value => {
        if (value === '') {
            this.clearSuggestions()
            this.props.onChange({
                description: '',
                terms: []
            })
        }
        this.setState(() => ({ inputValue: value }))
        this.debounce()
    }

    handleInputOnBlur = () => {
        if (!this.mouseOnSuggestion) {
            this.clearSuggestions()
        }
        this.props.onBlur && this.props.onBlur(this.state.inputValue)
    }

    suggestionClick = suggestion => {
        this.props.onChange && this.props.onChange(suggestion)

        this.setState(() => ({ inputValue: suggestion.description }))
        this.clearSuggestions()
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
            suggestions: this.state.suggestions,
            getSearchInputProps: this.getSearchInputProps,
            getSuggestionItemProps: this.getSuggestionItemProps
        })
    }
}
