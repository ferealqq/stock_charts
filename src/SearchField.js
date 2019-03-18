import React, { Component } from 'react';
import { Input,Button,Row,Col } from 'reactstrap';
import { namesNSymbols } from './names';
import { map,filter } from 'lodash';
import { get } from 'axios';

let l = filter(namesNSymbols,(obj)=> {
  if(obj.name.toLowerCase().includes('tesl')){
    console.log(obj.name,"Yes")
    return obj;
  }else if(obj.symbol.toLowerCase().includes('msf')){
    return obj;
  } 
})
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      suggestions: []
    };    
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount(){
    /*get('https://cloud.iexapis.com/beta/ref-data/symbols?token=pk_3a1d992a8c0243ed9de7d8b1cbe4570e')
      .then((res) => console.log(res));*/
  }
  onChange(event){
    let newValue = event.target.value;
    this.setState({
      value: newValue
    });
  }
  
  onSuggestionsFetchRequested({ value }){
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  onSuggestionsClearRequested(){
    this.setState({
      suggestions: []
    });
  }

  handleClick(){
    this.props.selectedStock(this.state.value);
  }

  render() {
    const { value, suggestions } = this.state;

    return (
        <Row>
          <Col className="d-flex">
            <div className="p-2">
              <Input className="p-2" placeholder="TSLA" 
                value={this.state.value}
                onChange={this.onChange}
                style={{minHeight: "2.4em"}}/>
             </div>
            <div className="p-2">
              <Button className="p-1" color="secondary" 
                  onClick={this.handleClick}
                  style={{minHeight: "2.4em"}}> 
                  Find 
                </Button> 
            </div>
          </Col>
        </Row>        
    );
  }
}

export { SearchField };