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
        suggestions: null
    }

    componentDidMount() {
        this.autoComplete = new window.google.maps.places.AutocompleteService()
        this.debounce = debounce(this.fetchPredictions, 500)
    }

    fetchPredictions = () => {
        const { location } = this.props
        if (location.length) {
            this.autoComplete.getPlacePredictions(
                { input: location },
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

    handleInputChange = value => {
        value === '' && this.clearSuggestions()

        this.props.onChange(value)
        this.debounce()
    }

    handleInputOnBlur = () => !this.mouseOnSuggestion && this.clearSuggestions()

    suggestionClick = suggestion => {
        this.props.onSuggestionClick(suggestion)

        this.clearSuggestions()
    }

    suggestionMouseEnter = () => (this.mouseOnSuggestion = true)

    suggestionMouseLeave = () => (this.mouseOnSuggestion = false)

    getInputProps = () => ({
        onChange: e => this.handleInputChange(e.target.value),
        onBlur: () => this.handleInputOnBlur(),
        value: this.props.location
    })

    getSuggestionProps = suggestion => ({
        onClick: () => this.suggestionClick(suggestion),
        onMouseEnter: () => this.suggestionMouseEnter(),
        onMouseLeave: () => this.suggestionMouseLeave()
    })

    render() {
        return this.props.children({
            locationProps: {
                suggestions: this.state.suggestions,
                getInputProps: this.getInputProps,
                getSuggestionProps: this.getSuggestionProps
            }
        })
    }
}

export default GoogleAutocomplete
