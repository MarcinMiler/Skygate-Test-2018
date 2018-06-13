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
        if (value === '') {
            this.clearSuggestions()
            this.props.changeLocation('location', '')
            this.props.changeLocation('locationTerms', [])
        }

        this.props.changeLocation('location', value)
        this.debounce()
    }

    handleInputOnBlur = () => {
        if (!this.mouseOnSuggestion) {
            this.clearSuggestions()
        }
    }

    suggestionClick = suggestion => {
        this.props.changeLocation('location', suggestion.description)
        this.props.changeLocation('locationTerms', suggestion.terms)

        this.clearSuggestions()
    }

    suggestionMouseEnter = () => (this.mouseOnSuggestion = true)

    suggestionMouseLeave = () => (this.mouseOnSuggestion = false)

    getSearchInputProps = () => ({
        onChange: e => this.handleInputChange(e.target.value),
        onBlur: () => this.handleInputOnBlur(),
        value: this.props.location
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

export default GoogleAutocomplete
