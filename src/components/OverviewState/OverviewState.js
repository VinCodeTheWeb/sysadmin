import React from 'react';
import { useSelector } from 'react-redux';
// COMPONENTS
import Container from '../Container/Container';

const OverviewState = () => {
  const {
    servers: { selected }
  } = useSelector(state => state);

  const stateColor = () => {
    switch (selected[0]['state'].toLowerCase()) {
      case 'active':
        return '#2998ff';

      case 'inactive':
        return '#999';

      case 'unavailable':
        return '#ff7d56';

      case 'panic':
        return '#ff165d';

      default:
        return 'transparent';
    }
  };

  return (
    <Container
      data-test="component-overview-state"
      className="overview__state"
      styles={{ backgroundColor: stateColor() }}
    >
      <Container
        className={`overview__state-${selected[0]['state'].toLowerCase()}`}
      >
        {selected[0]['state']}
      </Container>
    </Container>
  );
};

export { OverviewState as default };
