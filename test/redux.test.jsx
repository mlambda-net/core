import renderer from 'react-test-renderer';
import { expect } from '@jest/globals';
import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'add': {
      return { ...state, maps: ([action.payload.name] = action.payload.value) };
    }
    case 'update': {
      return { ...state, maps: ([action.payload.name] = action.payload.value) };
    }
  }
}

test('Redux render', () => {
  let v = {};
  v['b'] = 'b';
  const initial = {
    maps: v,
  };

  [state, dispatch] = React.useReducer(reducer, initial);

  dispatch({ type: 'add', payload: { name: 'a', value: 'b' } });
  dispatch({ type: 'update', payload: { name: 'b', value: 'a' } });

  console.log(state);

  expect(true);
});
