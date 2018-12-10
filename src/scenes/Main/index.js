import React from 'react';
import styles from './style.less';

import Player from '../../features/Player';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.main}>
				<Player />
			</div>
		);
	}
}


export default Main;