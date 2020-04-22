import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAmount } from './redux/actions'
import AmountBar from './AmountBar';
import AmountPrice from './AmountPrice';
import Credits from './Credits';
import './App.css';
import { ReactComponent as ReactLogo } from './prayer.svg';

class App extends Component {

  constructor() {
    super();

    this.state = {
      data: null
    };

    this.inputValueOnChange = this.inputValueOnChange.bind(this);
  }

  inputValueOnChange(onCardAmount, numOfLoads) {
    this.props.getFetchAmount(onCardAmount, numOfLoads)
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
    return (
      <div>
        <div className="App">
          <ReactLogo />
          <AmountBar inputValueOnChange={this.inputValueOnChange} />
          <AmountPrice amountToPutOnCard={this.props.amountToPutOnCard} />
        </div>
        <Credits />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return ({
    getFetchAmount: (amountToPutOnCard, numOfLoads) => dispatch(fetchAmount(amountToPutOnCard, numOfLoads)), 
    okay: () => console.log('this is showcasing what is on props')
  })
};

const Main = connect(mapStateToProps, mapDispatchToProps)(App);

export default Main;