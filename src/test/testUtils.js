import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import { rootReducer } from '../redux/root-reducer';

const middleware = [];
export const storeFactory = initialState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initialState);
};

export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
