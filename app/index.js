import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import store from './store/'
import actionCreators from './actions/'
import BoilerplateApp from './components/boilerplate'

const mapStateToProps = (state) => ({
	counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
	increment: (counter) => dispatch(actionCreators.increment(counter)),
	decrement: (counter) => dispatch(actionCreators.decrement(counter)),
});

const App = connect(mapStateToProps,mapDispatchToProps)(BoilerplateApp);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('app'));