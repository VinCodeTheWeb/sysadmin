import React from 'react';
import { useSelector } from 'react-redux';

// COMPONENTS
import Container from '../Container/Container';
import DescriptionList from '../DescriptionList/DescriptionList';
import BarChart from '../BarChart/BarChart';
import MapContainer from '../MapContainer/MapContainer';

const Description = () => {
  const {
    servers: { selected }
  } = useSelector(state => state);

  const { id, ip, seen, name, state } = selected[0];
  const DescriptionLists = [
    { keyName: 'ID', text: id },
    { keyName: 'IP', text: ip },
    { keyName: 'NAME', text: name },
    { keyName: 'STATE', text: state },
    { keyName: 'LOCATION', text: selected[0].locationName },
    { keyName: 'LAST SEEN', text: seen }
  ];

  return (
    <Container data-test="description-component" className="description">
      <BarChart />

      <Container className="list" tag="ul">
        {DescriptionLists.map((list, i) => (
          <DescriptionList data-test="description-list" key={i} {...list} />
        ))}
      </Container>
      <MapContainer />
    </Container>
  );
};

export { Description as default };
