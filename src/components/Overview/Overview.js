import React from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import Container from '../Container/Container';
import Heading from '../Heading/Heading';
import OverviewLocation from '../OverviewLocation/OverviewLocation';
import OverviewState from '../OverviewState/OverviewState';

const Overview = () => {
  const {
    servers: { selected }
  } = useSelector(state => state);

  return (
    <Container data-test="component-overview" className="overview">
      <Heading
        data-test="component-overview-heading"
        className="overview__heading"
        text={selected[0].name}
      />
      <OverviewLocation />
      <OverviewState />
    </Container>
  );
};

export { Overview as default };
