import React from 'react';

// COMPONENTS
import Container from '../Container/Container';
import Description from '../Description/Description';

const Detail = () => (
  <Container data-test="detail-component" className="detail">
    <Description />
  </Container>
);

export { Detail as default };
