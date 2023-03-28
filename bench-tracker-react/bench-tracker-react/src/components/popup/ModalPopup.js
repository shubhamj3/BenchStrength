import React, { useEffect, useState } from 'react';
import './ModalPopup.css'

const ModalPopup = ({ id, area, date, dept, mail, name, exp, skill, pod, handleClose }) => {

    const [employeeid, setEmployeeId] = useState('');
    const [areaofinterest, setAreaOfInterest] = useState('');
    const [benchdate, setBenchDate] = useState('');
    const [department, setDepartment] = useState('');
    const [email, setEmail] = useState('');
    const [employeename, setEmployeeName] = useState('');
    const [industryexperience, setIndustryExperience] = useState('');
    const [skills, setSkills] = useState('');
    const [podname, setPodName] = useState('');
    // const [show, setShow] = useState(false);

    useEffect(() => {

        setEmployeeId(id);

        setAreaOfInterest(area)

        setBenchDate(date)

        setDepartment(dept)

        setEmail(mail)

        setEmployeeName(name)

        setIndustryExperience(exp)

        setSkills(skill)

        setPodName(pod)

    }, [id])

    function editData() {
        fetch(`http://localhost:8080/api/employees/update/${employeeid}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ employeeid, areaofinterest, benchdate, department, email, employeename, industryexperience, skills, podname })
        }).then(res => {
            console.log(res)
        });
    }



    return (
        <>
            <div className="backDrop" onClick={handleClose} ></div>
            <div className='modalContainer'>
                <form onSubmit={editData}>
                    <div className='modalContainer_header'>
                        <h3 className="heading_3">
                            Employee Details
                        </h3>
                        <button type='button' className="cancelBtn" onClick={handleClose} >+</button>
                    </div>
                    <div className='modalContainer_body'>
                        <div className="inputContainer">
                            <input type="number" data-testid="empId-input" onChange={(e) => setEmployeeId(e.target.value)} value={employeeid} className="form-control " placeholder="Employee Id" disabled />
                        </div>
                        <div className="inputContainer">
                            <input type="text" onChange={(e) => setEmployeeName(e.target.value)} value={employeename} className="form-control" placeholder="Employee Name" />
                        </div>
                        <div className="inputContainer">
                            <input type="text" onChange={(e) => setSkills(e.target.value)} value={skills} className="form-control" placeholder="Skills" />
                        </div>
                        <div className="inputContainer">
                            <input type="number" onChange={(e) => setIndustryExperience(e.target.value)} value={industryexperience} className="form-control" placeholder="Industry Experience(in months)" />
                        </div>
                        <div className="inputContainer">
                            <select onChange={(e) => setDepartment(e.target.value)} value={department} className="form-control" placeholder="Department">
                                <option value="" disabled selected>Select Department</option>
                                <option value="PPE">PPE</option>
                                <option value="CES">CES</option>
                                <option value="LTR">LTR</option>
                                <option value="DAE">DAE</option>
                                <option value="DA">DA</option>
                                <option value="CEP">CEP</option>
                                <option value="COE">COE</option>
                            </select>
                        </div>
                        <div className="inputContainer">
                            <input type="text" onChange={(e) => setAreaOfInterest(e.target.value)} value={areaofinterest} className="form-control" placeholder="Area Of Interest" />
                        </div>
                        <div className="inputContainer">
                            <input type="email" data-testid="email-input" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email" required />
                        </div>
                        <div className="inputContainer">
                            <input type="date" data-testid="date-input" onChange={(e) => setBenchDate(e.target.value)} value={benchdate} className="form-control" placeholder="Bench Date" />
                        </div>
                        <div className="inputContainer">
                            <select type="text" onChange={(e) => setPodName(e.target.value)} value={podname} className="form-control" placeholder="Pod Name">
                                <option value="" disabled selected>Select Pod Name</option>
                                <option value="MoAD">MoAD</option>
                                <option value="Cloud Transformation">Cloud Tranformation</option>
                                <option value="XT">XT</option>
                                <option value="QE">QE</option>
                            </select>
                        </div>
                    </div>
                    <div className='modalContainer_footer'>
                        <button data-testid="btnSubmit" type="submit">Submit</button>
                        <button data-testid="btnCancel"

 onClick={handleClose}>Cancel</button>
                    </div>

                </form>
            </div>
        </>)
}
export default ModalPopup
