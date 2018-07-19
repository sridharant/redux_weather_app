import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.handleInputChanged = this.handleInputChanged.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render() {
        return (
            <form className="input-group"
                onSubmit={this.handleFormSubmit}
            >
                <input
                    placeholder="get a 5 day forecast in your favorite city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.handleInputChanged} />
                <span className="input-group-btn">
                    <button type="submit"
                        className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }

    handleInputChanged(evt) {
        this.setState({ term: evt.target.value });
    }
    handleFormSubmit(evt) {
        evt.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });//clear input
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);