import React from 'react'
import Header from './header'
import { Button, Row, Col, Grid } from 'react-bootstrap'
import styles from 'style'

const BoilerplateApp = ({counter, increment, decrement}) => {
	return (
			<div>
				<Header />
				<Grid>
					<Row className="show-grid">		
 						<Col xs={12}>
							<h1 className="text-center well well-lg" style={styles}>
								<b>{counter}</b>
							</h1>
						</Col>	
						
						<Col sm={6} xs={12}>
							<Button bsSize="large" bsStyle="link" onClick={() => increment(counter)} block>
								<img src="./app/images/plus.svg" alt="+" width="80" height="80"/>
							</Button>
						</Col>
		
						<Col sm={6} xs={12}>	
							<Button bsSize="large" bsStyle="link" onClick={() => decrement(counter)} block>
								<img src="./app/images/minus.svg" alt="-" width="80" height="80"/>
							</Button>
						</Col>
					</Row>
				</Grid>
			</div>
	);
};

export default BoilerplateApp