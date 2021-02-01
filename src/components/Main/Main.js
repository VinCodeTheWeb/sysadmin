import React from 'react';

// COMPONENTS
import Overview from '../Overview/Overview';
import Detail from '../Detail/Detail';

const Main = () => (
  <main data-test="main-component" className="main">
    <Overview />
    <Detail />
  </main>
);

export { Main as default };
