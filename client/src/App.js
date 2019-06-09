import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAmount } from './redux/actions'
import AmountBar from './AmountBar';
import AmountPrice from './AmountPrice';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      data: null
    };

    this.searchOnChange = this.searchOnChange.bind(this);
  }

  searchOnChange(searchVal, numOfLoads) {
    this.props.getFetchAmount(searchVal, numOfLoads)
  }

  componentDidMount() {
    // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({
        data: res.express
      }))
      .catch(err => console.log(err));
  }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    console.log('ugh', this.props)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">How much is on your laundry card?</h1>

       

          <div>
            <AmountBar searchOnChange={this.searchOnChange} />

            <div>
              <AmountPrice amountToPutOnCard={this.props.amountToPutOnCard} chicken="hi"/>
            </div>

          </div>


        </header>
        <p className="App-intro">{this.state.data}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("what is state", state)
  console.log("So does this narrow it down", state.amountToPutOnCard)
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getFetchAmount: (amountToPutOnCard, numOfLoads) => dispatch(fetchAmount(amountToPutOnCard, numOfLoads)),
    okay: () => console.log('something')
    

  })
};

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;