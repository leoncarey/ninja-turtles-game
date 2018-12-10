import store from '../../config/store';
import {SPRITE_SIZE_W} from '../../config/constants';

const handlerMovement = (Player) => {

	function getNewPosition(direction) {
		const oldPos = store.getState().player.position;

		switch (direction) {
			case 'Left':
				return [oldPos[0] - SPRITE_SIZE_W, oldPos[1]];
			case 'Right':
				return [oldPos[0] + SPRITE_SIZE_W, oldPos[1]];
		}
	}

	function getNewDirection(direction, walkIndex) {
		switch (direction) {
			case 'Left':
				return `${SPRITE_SIZE_W * walkIndex}px -340px`;
			case 'Right':
				return `${SPRITE_SIZE_W * walkIndex}px -340px`;
		}
	}

	function getWalkIndex(direction) {
		const walkIndex = store.getState().player.walkIndex;

		switch (direction) {
			case 'Left':
				return walkIndex <= -3 || walkIndex > 0 ? 1 : walkIndex - 1;
			case 'Right':
				return walkIndex >= 3 || walkIndex < 0 ? 1 : walkIndex + 1;
		}
	}

	function dispatchMove(direction) {
		const walkIndex = getWalkIndex(direction);

		store.dispatch({
			type: 'MOVE_PLAYER',
			payload: {
				position: getNewPosition(direction),
				spriteLocation: getNewDirection(direction, walkIndex),
				walkIndex
			}
		});
	}

	function dispatchStop(direction) {
		const oldPos = store.getState().player.position;

		store.dispatch({
			type: 'MOVE_PLAYER',
			payload: {
				position: [oldPos[0], oldPos[1]],
				spriteLocation: direction == 'Left' ? '10px -130px' : '-10px -130px',
				walkIndex: 0
			}
		});
	}

	function handleKeyDown(e) {
		e.preventDefault();

		switch (e.keyCode) {
			case 37:
				return dispatchMove('Left');

			case 38:
				return dispatchMove('Up');

			case 39:
				return dispatchMove('Right');

			case 40:
				return dispatchMove('Down');
		}
	}

	function handleKeyUp(e) {
		e.preventDefault();

		switch (e.keyCode) {
			case 37:
				return dispatchStop('Left');

			case 38:
				return dispatchStop('Up');

			case 39:
				return dispatchStop('Right');

			case 40:
				return dispatchStop('Down');
		}
	}

	window.addEventListener('keydown', (e) => {
		handleKeyDown(e);
	});

	window.addEventListener('keyup', (e) => {
		handleKeyUp(e);
	});

	return Player;

};

export default handlerMovement;