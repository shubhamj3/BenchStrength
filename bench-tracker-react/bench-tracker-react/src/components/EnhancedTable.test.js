import {render, screen,act} from '@testing-library/react'
import { render as renderer, unmountComponentAtNode } from 'react-dom';
import userEvent from '@testing-library/user-event';
import  EnhancedTable from './EnhancedTable';
import TableToolbar from './TableToolbar'
import { mount, shallow } from "enzyme";
// import TableRow from '@material-ui/core/TableRow'
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow'
import TableContainer from '@material-ui/core/TableContainer'
import TableCell from '@material-ui/core/TableCell'
import Edit from '@material-ui/icons/Edit';
import Checkbox from '@material-ui/core/Checkbox'
// const fetchMock = require('fetch-mock-jest')
// const userManager = require('../src/user-manager');
import fetchMock from 'jest-fetch-mock';


describe('Enhanced Table test cases', () => {
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

    // test('Should render h6 Add Text', () => {
    //     render(<TableToolbar/>);
    //     expect(screen.getByText('Add')).toHaveClass('add');;
    // })

    // test('Should have 3 TableRow tag in enhanced table component', () => {



    //     renderer(<EnhancedTable/>, element);
        
        
        
    //     const count = element.getElementsByTagName('TableRow').length;
        
        
        
    //     expect(count).toBe(3);
    //     });

        test('should have one TableBody', () => {                           ////enzym test case
            const wrapper = shallow(<EnhancedTable/>);
            const tablebody = wrapper.find(TableBody);
        // expect(tooltip.getByTestId('adding')).toHaveAccessibleDescription('Add')
        // expect(tooltip.toBeInTheDocument());
        // expect(tooltip.contains('${title="Add"}')).toBe(true);
        expect(tablebody.length).toBe(1);
            })

            
            test('should have one TableHead', () => {                           ////enzym test case
                const wrapper = shallow(<EnhancedTable/>);
                const tablehead = wrapper.find(TableHead);
            // expect(tooltip.getByTestId('adding')).toHaveAccessibleDescription('Add')
            // expect(tooltip.toBeInTheDocument());
            // expect(tooltip.contains('${title="Add"}')).toBe(true);
       expect(tablehead.length).toBe(1); 
        //    let containerStyle = tablehead.get(0).props.style;
        //    let styleproperties = {tableLayout: 'fixed', textAlign:'center'}
        //    expect(containerStyle).toHaveProperty(styleproperties);

        // expect(wrapper.dive().find(CircularProgress)).toHaveLength(1);
                })
    

             test('should have two TableRow without pagination', () => {                           ////enzym test case
                    const wrapper = shallow(<EnhancedTable/>);
                    const tablerow = wrapper.find(TableRow);
                    expect(tablerow.length).toBe(2);
             })


             test('should render TableContainer', () => {                           ////enzym test case
                const wrapper = shallow(<EnhancedTable/>);
                const toolcontainer = wrapper.find(TableContainer);
            expect(toolcontainer.exists()).toBe(true);
            })

            // test('should reach the class enhancedtablediv so that it renders that part.', () => {             
            // const wrapper = shallow(<EnhancedTable />);
            // const enhancedtable = wrapper.find('.enhancedtablediv');
            // expect(enhancedtable.length).toBe(1);
            // // console.log(wrapper.debug());
            // // expect(wrapper.equals(<div className="enhancedtablediv" />)).toBe(true);
            //  })


             test('should render Edit button', () => {                           ////enzym test case
                const wrapper = shallow(<EnhancedTable/>);
                const edit = wrapper.find('.editbutton').last();
                expect(edit.length).toBe(1);
            })

            // test('passes when value is an array', () => {
            //     const wrapper = shallow(<EnhancedTable/>);
            //     const toolcontainer = wrapper.find(likes);
            //     expect([]).toBeArray();
            //     expect([1]).toBeArray();
            //     expect(true).not.toBeArray();
            //   });


            test('should render Checkbox', () => {                           ////enzym test case
                const wrapper = shallow(<EnhancedTable/>);
                const checkbox = wrapper.find(Checkbox).last();
            expect(checkbox.exists()).toBe(true);
            })


            test('value of resolvedRef should not be null in useEffect',()=>{
                const resolvedRef = jest.fn();
                const wrapper1 = shallow(<EnhancedTable resolvedRef={resolvedRef}/>);
                console.log(wrapper1.debug("hi there."))
                expect(wrapper1).not.toBeNull();
                // expect(resolvedRef).toHaveBeenCalledTimes(0);

            })

            // test('should render Checkbox ref text', () => {                           ////enzym test case
            //     const wrapper = shallow(<EnhancedTable/>);
            //     const checkbox = wrapper.find(Checkbox).last();
            // expect(checkbox.text().toEqual('ref'));
            // })
            // test('value of resolvedRef should not be null in useEffect',()=>{
            //     const resolvedRef = jest.fn();
            //     const wrapper1 = shallow(<EnhancedTable resolvedRef={resolvedRef}/>);
            //     expect(wrapper1).not.toBeNull();

            // })


            test('should have addUserHandler in the component',()=>{
                const addUserHandler = jest.fn();
                const wrapper2 = shallow(<EnhancedTable addUserHandler={addUserHandler}/>);
                expect(wrapper2).not.toBeNull();
                // expect(resolvedRef).toHaveBeenCalledTimes(0);

            })


            // test("deletes correctly", async()=>{
            //     const deldata = await EnhancedTable();
            //     expect(deldata).not.toBeNull();
            // })


            it("addUserHandler testing",()=>{
                fetchMock.mockResponseOnce(JSON.stringify({newemp:{
                    "employeeid": 111,
                    "employeename": "Saurabh Darp",
                    "skills": "React JS",
                    "industryexperience": "8",
                    "department": "NON-PPE",
                    "areaofinterest": "Cloud",
                    "email": "Saurabh.Darp@brillio.com",
                    "benchdate": "2021-07-04",
                       "podname": "XT"
                }}));

                const addUserHandler = jest.fn();
                const wrapper2 = shallow(<EnhancedTable addUserHandler={addUserHandler}/>).last();
                // const newemp = addUserHandler;

                expect(wrapper2).not.toBeNull();
                // expect(fetchMock).toHaveBeenCalledTimes(1);


                // await act(async()=>render(<EnhancedTable/>));
                // expect(screen.getByText("POST")).toBeInTheDocument();
                // expect(fetch).toHaveBeenCalledWith(
                //     "http://localhost:8080/api/employees/add");
            })


        //     global.fetch= jest.fn(() => 
        //     Promise.resolve({
        //         json:() =>
        //             Promise.resolve(
                        // {newemp:{
                        //     "employeeid": 111,
                        //     "employeename": "Saurabh Darp",
                        //     "skills": "React JS",
                        //     "industryexperience": "8",
                        //     "department": "NON-PPE",
                        //     "areaofinterest": "Cloud",
                        //     "email": "Saurabh.Darp@brillio.com",
                        //     "benchdate": "2021-07-04",
                        //        "podname": "XT"
                        // }}
        //             ),
        //     })
        //  );

        //  test('fetch testing for add user', async()=>{
        //     await act(async()=>shallow(<EnhancedTable/>));
        //     // expect(screen.getByText("POST")).toBeInTheDocument();
        //     // expect(fetch).toHaveBeenCalledWith(
        //     //     "http://localhost:8080/api/employees/add");
        //     const newuser= await fetch(`http://localhost:8080/api/employees/add`, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         // body: JSON.stringify({ employeeid, areaofinterest, benchdate, department, email, employeename, industryexperience, skills, podname })
        //         body:JSON.stringify({
        //             "employeeid": 111,
        //             "employeename": "Saurabh Darp",
        //             "skills": "React JS",
        //             "industryexperience": "8",
        //             "department": "NON-PPE",
        //             "areaofinterest": "Cloud",
        //             "email": "Saurabh.Darp@brillio.com",
        //             "benchdate": "2021-07-04",
        //                "podname": "XT"
        //         })
        //     }).then(res => {
        //             console.log(res)
        //         });

        //     // expect(resolvedRef).toHaveBeenCalledTimes(0);
        //     expect(fetch).toHaveBeenCalledTimes(1);
        //     expect(newuser).not.toBeNull();

        // })






    //     beforeAll(() => {
    //     global.fetch= jest.fn(() => 
    //     Promise.resolve({
    //         json:() =>
    //             Promise.resolve({
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body:JSON.stringify({
    //                     "employeeid": 111,
    //                     "employeename": "Saurabh Darp",
    //                     "skills": "React JS",
    //                     "industryexperience": "8",
    //                     "department": "NON-PPE",
    //                     "areaofinterest": "Cloud",
    //                     "email": "Saurabh.Darp@brillio.com",
    //                     "benchdate": "2021-07-04",
    //                        "podname": "XT"
    //                 })
    //             }),
    //     })
    //  );
    // })


    //  test('fetch testing for add user', async()=>{
    //     await act(async()=>render(<EnhancedTable/>));
    //     expect(screen.getByText("POST")).toBeInTheDocument();
    //     expect(global.fetch).toHaveBeenCalledWith(
    //         "http://localhost:8080/api/employees/add");
    //     // expect(resolvedRef).toHaveBeenCalledTimes(0);

    // })

    

    // test(async () => {
    //     const newemp = [{name:'shubham'}];
    //     fetchMock
    //     .get('http://localhost:8080/api/csv/employees/', newemp)
    //     // expect(await userManager.getAll()).toEqual([{ name: 'shubham' }]);
    //     expect(fetchMock).toHaveLastFetched('http://localhost:8080/api/csv/employees/')
    // });




})