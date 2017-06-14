import {expect} from 'chai';

import {createStore} from 'redux';
import mainReducer from '../../../client/reducer/index';

describe('Main reducer', () => {
  let testStore;
  beforeEach('Create test store', () => {
    testStore = createStore(mainReducer);
  });

  it('has expected initial state', () => {
    expect(testStore.getState()).to.be.deep.equal({
      user: {}, 
      viewedUser: {},
      users: [],
      products: {
        selected: {},
        list: []
      },
      orders: {
        selected: {},
        list: []
      },
      reviews: {list: []}
    })
  }); 
});

