import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Container from '../Container/Container';
import Main from '../Main/Main';

// REDUX ACTIONS
import { getServers } from '../../redux/servers/servers.action';

const App = () => {
  const dispatch = useDispatch();
  const {
    servers: { selected }
  } = useSelector(state => state);

  useEffect(() => {
    dispatch(getServers());
  }, []);

  return selected.length ? (
    <Container data-test="app-component" className="container">
      <Header />
      <Container className="content">
        <Sidebar />
        <Main />
      </Container>
    </Container>
  ) : null;
};

export { App as default };
