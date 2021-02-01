import React from 'react';

import User from '../../assets/img/user-1.jpg';

// COMPONENTS
import Container from '../Container/Container';
import SvgIcon from '../SgvIcon/SvgIcon';
import Nav from '../Nav/Nav';
import SpanNotif from '../SpanNotif/SpanNotif';

const Header = () => (
  <header data-test="header-component" className="header">
    <Container className="user-nav">
      <img src={User} alt="User pic" className="user-nav__user-photo" />
      <SpanNotif className="user-nav__user-name" notif="John Doe" />
    </Container>
    <Nav className="user-nav">
      <Container className="user-nav__icon-box">
        <SvgIcon className="user-nav__icon" icon="bookmark" />
        <SpanNotif className="user-nav__notification" notif="7" />
      </Container>

      <Container className="user-nav__icon-box">
        <SvgIcon className="user-nav__icon" icon="chat" />
        <SpanNotif className="user-nav__notification" notif="13" />
      </Container>
    </Nav>
  </header>
);

export { Header as default };
