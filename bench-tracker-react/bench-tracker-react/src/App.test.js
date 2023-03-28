import {act, render, screen} from '@testing-library/react'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import { lighten, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import App from './App';
import { shallow } from "enzyme";
// import Dashboard from "./components/dashboard/Dashboard"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
describe('App test cases', () => {
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

    test('should have one Routes tag', () => {                           ////enzym test case
        const wrapper = shallow(<App/>);
        const router = wrapper.find(Routes);
        expect(router.length).toBe(1);
 })



})