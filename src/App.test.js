import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import logo from './logo.svg';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

describe('Render Homepage Title', function() {
  it('Renders title on the homepage', function() {
    const wrapper = shallow(<App />); 
    const welcome = <p>SEER - CISE S2 TEAM 11</p>;
    expect(wrapper.contains(welcome)).to.equal(true);
  });
});

describe('Render Homepage Logo', function() {
  it('Renders the homepage logo', function() {
    const wrapper = shallow(<App />); 
    const logoContainer = <img src={logo} className="App-logo" alt="logo" />
    expect(wrapper.contains(logoContainer)).to.equal(true);
  });
});

describe('Render the Homepage', function() {
  it('Renders the entire homepage', function() {
    const wrapper = shallow(<App />); 
    const wholePage = <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        SEER - CISE S2 TEAM 11
        </p>
        <p>Coming soon...</p>
      </header>
  </div>
    expect(wrapper.contains(wholePage)).to.equal(true);
  });
});