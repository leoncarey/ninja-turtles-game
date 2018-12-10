import React from 'react';
import ReactDOM from 'react-dom';

import theme from './theme.less';

import {Provider} from 'react-redux';
import store from './config/store';

import Main from './scenes/Main';

ReactDOM.render(
	<Provider store={store}>
		<Main />
	</Provider>,
	document.getElementById('app')
);