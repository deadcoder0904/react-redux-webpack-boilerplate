import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header'
import store from './store/'
import actionCreators from './actions/'
import { Button, Row, Col, Grid } from 'react-bootstrap'
import styles from 'style'

const mapStateToProps = (state) => ({
	counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
	increment: (counter) => dispatch(actionCreators.increment(counter)),
	decrement: (counter) => dispatch(actionCreators.decrement(counter)),
});

const BoilerplateApp = ({counter, increment, decrement}) => {
	return (
			<div>
				<Header />
				<Grid>
					<Row className="show-grid">		
 -						<Col xs={12}>
							<h1 className="text-center well well-lg" style={styles}>
								<b>{counter}</b>
							</h1>
						</Col>	
						
						<Col sm={6} xs={12}>
							<Button bsSize="large" bsStyle="link" onClick={() => increment(counter)} block>
								<img src="../app/images/plus.svg" alt="+" width="80" height="80"/>
							</Button>
						</Col>
		
						<Col sm={6} xs={12}>	
							<Button bsSize="large" bsStyle="link" onClick={() => decrement(counter)} block>
								<img src="../app/images/minus.svg" alt="-" width="80" height="80"/>
							</Button>
						</Col>
					</Row>
				</Grid>
			</div>
	);
};

const App = connect(mapStateToProps,mapDispatchToProps)(BoilerplateApp);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('app'));