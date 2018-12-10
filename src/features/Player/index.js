import React from 'react';
import {connect} from 'react-redux';

import handleMovement from './movement';

import styles from './style.less';
import spritePlayer from '../../assets/img/leonardo.png';

import {SPRITE_SIZE_W, SPRITE_SIZE_H} from '../../config/constants';

class Player extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.player}
				 style={{
					 bottom: this.props.position[1],
					 left: this.props.position[0],
					 width: SPRITE_SIZE_W,
					 height: SPRITE_SIZE_H,
					 backgroundImage: `url(${spritePlayer})`,
					 backgroundPosition: this.props.spriteLocation
				 }}
			/>
		);
	}
}

export default connect((state) => {
	return {
		...state.player,
		position: state.player.position,
		spriteLocation: state.player.spriteLocation
	}
})(handleMovement(Player));