import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

// COMPONENTS
import Nav from '../Nav/Nav';
import NavItem from '../NavItem/NavItem';
import Container from '../Container/Container';

// REDUX ACTIONS
import { selectServer } from '../../redux/servers/servers.action';

const Sidebar = () => {
  const dispatch = useDispatch();
  const {
    servers: { data, selected }
  } = useSelector(state => state);

  return (
    <Nav data-test="component-sidebar" className="sidebar">
      <Container tag="ul" className="side-nav">
        {data.map(server => (
          <NavItem
            data-test="component-navitem"
            key={server.id}
            textLink={server.name}
            active={selected[0].id === server.id}
            handleClick={() => dispatch(selectServer(server.name))}
          />
        ))}
      </Container>
    </Nav>
  );
};

export { Sidebar as default };
