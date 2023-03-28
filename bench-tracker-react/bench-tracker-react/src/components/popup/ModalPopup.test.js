import {render, screen} from '@testing-library/react'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import ModalPopup from './ModalPopup';
import { shallow } from "enzyme";
describe('EditEmployee test cases', () => {
    let element;
    beforeEach(() => {
        element = document.createElement('div');
        document.body.appendChild(element);
    })

    afterEach(() => {
        unmountComponentAtNode(element);
        element.remove();
        element = null;
    })

    test('Should render h3 tag with Employee Details Text', () => {
        render(<ModalPopup />);
        expect(screen.getByText('Employee Details')).toBeInTheDocument();
    })

    test('Should have Submit button in ModalPopup component', () => {
        render(<ModalPopup />);
        expect(screen.getByTestId('btnSubmit')).toHaveTextContent('Submit');
    })

    test('Should have Cancel button in ModalPopup component', () => {
        render(<ModalPopup />);
        expect(screen.getByTestId('btnCancel')).toHaveTextContent('Cancel');
    })


    test('Render email input', () => {
        render(<ModalPopup />);
        const inputEl = screen.getByTestId("email-input");
        expect(inputEl).toBeInTheDocument();
        expect(inputEl).toHaveAttribute("type", "email");
    })

    test('Pass valid email to test email input field', () => {
        render(<ModalPopup />);
        const inputEl = screen.getByTestId("email-input");
        userEvent.type(inputEl, "test@mail.com");
        expect(screen.getByTestId("email-input")).toHaveValue("test@mail.com");
    })

    test('Render employee id input',() => {
        render(<ModalPopup/>);
        const inputEI = screen.getByTestId("empId-input");
        expect(inputEI).toBeInTheDocument();
        expect(inputEI).toHaveAttribute("type","number");
    })

    test('Should have disabled attribute in employee id input field',() => {
        render(<ModalPopup/>);
        const empId = screen.getByTestId("empId-input");
        expect(empId).toBeInTheDocument();
        expect(empId).toHaveAttribute("disabled");
    })

    test('Render bench date', () => {
        render(<ModalPopup />);
        const date = screen.getByTestId("date-input");
        expect(date).toBeInTheDocument();
        expect(date).toHaveAttribute("type","date");
    })
    
    test('Should have 2 select elements in ModalPopup Component', () => {

        renderer(<ModalPopup />, element);

        const count = element.getElementsByTagName('select').length;

        expect(count).toBe(2);

    })

    test('should render modalcontainer', () => {                           ////enzym test case
        const wrapper = shallow(<ModalPopup/>);
        const modalcontainer = wrapper.find('.modalContainer');
    expect(modalcontainer.exists()).toBe(true);
    })

})