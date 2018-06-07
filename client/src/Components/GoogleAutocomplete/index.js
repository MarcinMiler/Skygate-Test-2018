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
        suggestions: [],
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

    handleInputChange = value => {
        this.setState(() => ({ inputValue: value }))
        this.debounce()
    }

    render() {
        return this.props.children({
            suggestions: this.state.suggestions,
            handleInputChange: this.handleInputChange
        })
    }
}

export default GoogleAutocomplete
