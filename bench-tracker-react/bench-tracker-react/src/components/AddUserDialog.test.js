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

import DialogTitle from '@material-ui/core/DialogTitle'

import { shallow } from "enzyme";
import { mount } from "enzyme";

import Button from '@material-ui/core/Button'

import sinon from 'sinon';
import DialogActions from '@material-ui/core/DialogActions'
import { click } from '@testing-library/user-event/dist/click';

describe('Add User Dialog test cases', () => {
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

    
    // test('Should render DialogTitle tag with Add Employee Text', () => {
    //     render(<AddUserDialog />);
    //     expect(screen.getByText('Add Employee')).toBeInTheDocument();
    // })

    test('should have one DialogTitle tag with Add Employee Text', () => {                           ////enzym test case
        const wrapper = shallow(<AddUserDialog/>);
        const dialogtitle = wrapper.find(DialogTitle);
    // expect(del.exists()).toBe(true);
    expect(dialogtitle.length).toBe(1);
    // const result = dialogtitle.find('Add Employee');
    // expect(result.text()).toEqual("Add Employee");
    expect(dialogtitle.text().includes('Add Employee')).toBe(true);
    })


    test('should have one icon button', () => {
        const wrapper = shallow(<AddUserDialog/>);
        const iconbutton = wrapper.find(IconButton);
            // const mockCallBack = jest.fn();
        
            // const button = shallow((<IconButton onClick={mockCallBack}>Ok!</IconButton>));
            // button.find('iconbutton').simulate('click');
            // expect(mockCallBack.mock.calls.length).toEqual(1);
            expect(iconbutton.length).toBe(1);
            // expect(iconbutton.text().includes('add')).toBe(true);

          }
    )

    test('should have one tooltip', () => {                           ////enzym test case
        const wrapper = shallow(<AddUserDialog/>);
        const tooltip = wrapper.find(Tooltip);
    // expect(tooltip.getByTestId('adding')).toHaveAccessibleDescription('Add')
    // expect(tooltip.toBeInTheDocument());
    // expect(tooltip.contains('${title="Add"}')).toBe(true);
    expect(tooltip.length).toBe(1);
        })


        test('Should have Cancel button in the adduserdialog component', () => {
            const wrapper = shallow(<AddUserDialog/>);
            const button = wrapper.find(Button).first();                ///here .first allows us to get to child https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/first.html
            // expect(button.text().includes('Cancel')).toBe(true);
            expect(button.text()).toEqual('Cancel');

            // expect(screen.getByTestId('cancelbtn')).toHaveTextContent('Cancel');
        })

        test('Should have Add button in the adduserdialog component', () => {
            const wrapper = shallow(<AddUserDialog/>);
            const button2 = wrapper.find(Button).at(1);                ///here .at allows us to get to child one more level deep  https://enzymejs.github.io/enzyme/docs/api/ReactWrapper/at.html
            // expect(button.text().includes('Cancel')).toBe(true);
            expect(button2.text()).toEqual('Add');

            // expect(screen.getByTestId('cancelbtn')).toHaveTextContent('Cancel');
        })


        // test('simulates click events', () => {
        //     const onButtonClick = sinon.spy();
        //     const wrapper = shallow(<AddUserDialog  onClick={onButtonClick} />);
        //     // button.first().simulate('click');
        //     wrapper.find(Button).first().simulate('onClick');  
        //     // expect(onButtonClick).toHaveProperty('callCount', 1);
        //     // expect(onButtonClick.callCount).toEqual(1);
        //      expect(onButtonClick).toHaveProperty('callCount', 1);
        //   });


        // test('simulates click events', () => {
        //     const mockLogout = jest.fn();
        //     const wrapper = shallow(<AddUserDialog onClick={mockLogout}/>);
        //     wrapper.find(Button).at(1).simulate(click);
        //     expect(mockLogout).toHaveBeenCalled();
        //   });


        // test('click', () => {
        //     render(
        //       <div>
        //         <label htmlFor="checkbox">Check</label>
        //         <input id="checkbox" type="checkbox" />
        //       </div>,
        //     )
          
        //     userEvent.click(screen.getByText('Check'))
        //     expect(screen.getByLabelText('Check')).toBeChecked()
        //   })


        // test("Expects to run onClick function when button is pressed in the DOM", () => {
        //     const mockCallBackClick = jest.fn();
        //     const wrapper = shallow(<Button onClick={mockCallBackClick} className="test" text="test"/>);
        //     wrapper.find(Button).at(1).simulate('click');
        //     expect(mockCallBackClick.mock.calls.length).toEqual(1);
        // });


})


