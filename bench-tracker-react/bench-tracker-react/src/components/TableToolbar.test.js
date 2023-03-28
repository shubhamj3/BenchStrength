import {act, render, screen} from '@testing-library/react'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import  TableToolbar from './TableToolbar';


import AddUserDialog from './AddUserDialog'
import clsx from 'clsx'
import DeleteIcon from '@material-ui/icons/Delete'
import GlobalFilter from './GlobalFilter'
import IconButton from '@material-ui/core/IconButton'
import { lighten, makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'

import { shallow } from "enzyme";

describe('Table Toolbar test cases', () => {
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

    test('Should render h6 Add Text', () => {
        render(<TableToolbar/>);
        expect(screen.getByText('Add')).toHaveClass('add');;
    })

    // test('Should render delete', () => {
    //     render(<TableToolbar/>);
    //     // expect(screen.getByTestId('deletebtn')).toContainElement('delete');
    //     const deleteparent = screen.getByTestId('deleteparent'); 
    //     expect(deleteparent).toHaveAccessibleDescription('Delete')
    // })

    // test('Should have one Toolbar in table toolbar component', () => {
    //     act(()=>{
    //                 render(<TableToolbar/>, element);
    //     })


    //     const count = element.getElementsByTagName('Toolbar').length;
    //     expect(count).toBe(1);
    // });

    test('should render Toolbar', () => {                           ////enzym test case
        const wrapper = shallow(<TableToolbar/>);
        const toolbar = wrapper.find(Toolbar);
    expect(toolbar.exists()).toBe(true);
    })

    test('should not render Tooltip when no option is clicked', () => {                           ////enzym test case
        const wrapper = shallow(<TableToolbar/>);
        const tooltip = wrapper.find(Tooltip);
    expect(tooltip.exists()).toBe(false);
    })

    // // <DeleteIcon/>
    // test('should have have delete', () => {                           ////enzym test case
    //     const wrapper = shallow(<TableToolbar/>);
    //     const del = wrapper.at(0).find(DeleteIcon);
    // // expect(del.exists()).toBe(true);
    // expect(del.length).toBe(1);
    // })

    
})   