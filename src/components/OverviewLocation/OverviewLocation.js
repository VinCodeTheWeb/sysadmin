import React from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import Container from '../Container/Container';
import SgvIcon from '../SgvIcon/SvgIcon';
import Button from '../Button/Button';

const OverviewLocation = () => {
  const {
    servers: { selected }
  } = useSelector(state => state);

  return (
    <Container
      data-test="component-overview-location"
      className="overview__location"
    >
      <SgvIcon className="overview__icon-location" icon="location-pin" />
      <Button className="btn-inline">{selected[0].locationName}</Button>
    </Container>
  );
};

export { OverviewLocation as default };
