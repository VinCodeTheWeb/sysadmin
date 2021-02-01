import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

// Redux Store
import { store } from './redux/store';

// IMPORT 'main.scss' FROM SASS (ENTRY POINT)
import './sass/main.scss';

// COMPONENTS
import App from './components/App/App';

const Sysadmin = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDom.render(<Sysadmin />, document.getElementById('root'));
