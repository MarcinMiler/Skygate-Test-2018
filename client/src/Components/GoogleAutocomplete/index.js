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
                    description: prediction.description
                }))
            })
        }
    }

    clearSuggestions = () => this.setState(() => ({ suggestions: null }))

    onChange = value => {
        if (this.props.onChange) {
            this.props.onChange(value)
        }
    }

    handleInputChange = value => {
        this.onChange(value)
        this.setState(() => ({ inputValue: value }))
        this.debounce()
    }

    handleInputOnBlur = () => {
        if (!this.mouseOnSuggestion) {
            this.clearSuggestions()
        }
        if (this.props.onBlur) {
            this.props.onBlur(this.state.inputValue)
        }
    }

    suggestionClick = value => {
        this.onChange(value)
        this.setState(() => ({ inputValue: value }))
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
        onClick: () => this.suggestionClick(suggestion.description),
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
