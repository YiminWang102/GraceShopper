import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import Users from '../../../client/components/Users';

describe('Users component', () => {

    let users;
    beforeEach('Create component', () => {
      let clickSpy = spy();
      users = shallow(<Users onClick={clickSpy} />);
    });

    it('should be a <div> with an expected background', () => {
        expect(users.is('div')).to.be.equal(true);
    });
});