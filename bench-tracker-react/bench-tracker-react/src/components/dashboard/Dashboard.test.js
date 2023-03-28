import {render, screen} from '@testing-library/react'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import  Dashboard from './Dashboard';

describe('Dashboard test cases', () => {
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

    test('Should render h2 tag with Welcome to Bench Management Portal. Text', () => {
        render(<Dashboard />);
        expect(screen.getByText('Welcome to Bench Management Portal.')).toBeInTheDocument();
    })

    // test('Should render typewriter Text', () => {
    //     render(<Dashboard />);
    //     expect(screen.getByTestId('typewritereff')).toHaveTextContent('typewriter');
    // })

    test('Should have Submit button in Dashboard component', () => {
        render(<Dashboard />);
        expect(screen.getByTestId('btn')).toHaveTextContent('Upload!');
    })


    test('Should have brillio image in Dashboard component', () => {
        render(<Dashboard />);
        expect(screen.getByTestId('brillioimage')).toHaveClass('brillioimage');
    })

    test('Should have input functionality in Dashboard component', () => {
        render(<Dashboard />);
        expect(screen.getByTestId('uploadfile')).toHaveClass('uploadfile');
    })

})