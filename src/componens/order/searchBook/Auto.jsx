import React from 'react';
import Autosuggest from 'react-autosuggest';
import Axios from 'axios'



export default class Auto extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
    this.props.searchText(newValue)
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    
    Axios.get(`/api/book/${value}-${this.props.searchType}`)
  .then(data => {
      
      this.setState({
        suggestions:  [...new Set((getSuggestions(value,data.data.books,this.props.searchType)))]
      });
  })
  .catch(err => console.log(err))
   
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: this.props.placeholder,
      value,
      onChange: this.onChange
    };

    // Finally, render it!
    return (
      <Autosuggest 

        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={ suggestion => suggestion[this.props.searchType]}
        renderSuggestion={(suggestion) =>renderSuggestion(suggestion[this.props.searchType])}
        inputProps={inputProps}
      />
      
    );
  }
}

const getSuggestions = (value,books ,searchType) => {
  
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
   
  return inputLength === 0 ? [] : books.filter(book =>
    book[searchType].toLowerCase().slice(0, inputLength) === inputValue
  );
};


const getSuggestionValue = suggestion => suggestion.name;
const renderSuggestion = suggestion => (
  <div style={{ textAlign :"right" }}>
    {suggestion}
  </div>
);