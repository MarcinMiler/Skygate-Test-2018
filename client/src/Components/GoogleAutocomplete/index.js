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

class GoogleAutocomplete extends Component {
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
        this.setState({
            suggestions: predictions.map((prediction, i) => ({
                id: prediction.id,
                description: prediction.description
            }))
        })
    }

    clearSuggestions = () => this.setState(() => ({ suggestions: null }))

    handleInputChange = value => {
        this.setState(() => ({ inputValue: value }))
        this.debounce()
    }

    handleInputOnBlur = () => {
        if (!this.mouseOnSuggestion) {
            this.clearSuggestions()
        }
    }

    suggestionClick = value => {
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

export default GoogleAutocomplete
