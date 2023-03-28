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
import Aboutus from './Aboutus';
import { shallow } from "enzyme";

describe('About us test cases', () => {
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

    test('Should render h1 Text', () => {
        // render(<Aboutus/>);
        // expect(screen.getByText('MoAD Team.')).toHaveClass('moad');;
            const wrapper = shallow(<Aboutus />);
            const aboutus = wrapper.find('.moad');
            expect(aboutus.length).toBe(1);
    })




})