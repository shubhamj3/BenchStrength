import {act, render, screen} from '@testing-library/react'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import LeftNavigation from './LeftNavigation';
import { shallow } from "enzyme";
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

describe('Left navigation test cases', () => {
    let element=null;

    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(() => {
        unmountComponentAtNode(element);
        element.remove();
        element = null;
    })

    test('should have one img tag', () => {                           ////enzym test case
        const wrapper = shallow(  <Router><LeftNavigation/></Router>);
        const link = wrapper.find(Link).last();
        expect(link.length).toBe(1);
 })

 test('Should have brillio logo image in left navigation component', () => {
    render(<Router><LeftNavigation/></Router>);
    expect(screen.getByTestId('brilliologo')).toHaveClass('brilliologo');
})


})