import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import MaUTable from "@material-ui/core/Table";
import PropTypes from "prop-types";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TablePaginationActions from "./TablePaginationActions";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Edit from "@material-ui/icons/Edit";
import TableToolbar from "./TableToolbar";
import { COLUMNS } from "./columns";
import "./EnhancedTable.css";
import "./popup/ModalPopup";

import {
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
  useResizeColumns,
  useFlexLayout,
} from "react-table";
import { width } from "@material-ui/system";
import { textAlign } from "@mui/material/node_modules/@mui/system";
import ModalPopup from "./popup/ModalPopup";

const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef();
    const resolvedRef = ref || defaultRef;

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
      <>
        <Checkbox ref={resolvedRef} {...rest} />
      </>
    );
  }
);

const inputStyle = {
  padding: 0,
  margin: 0,
  border: 0,
  background: "transparent",
};

// Create an editable cell renderer
const EditableCell = ({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData, // This is a custom function that we supplied to our table instance
}) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value);
  };

  // If the initialValue is changed externall, sync it up with our state
  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <input
      style={inputStyle}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

EditableCell.propTypes = {
  cell: PropTypes.shape({
    value: PropTypes.any.isRequired,
  }),
  row: PropTypes.shape({
    index: PropTypes.number.isRequired,
  }),
  column: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  updateMyData: PropTypes.func.isRequired,
};

// Set our editable cell renderer as the default Cell renderer
const defaultColumn = {
  Cell: EditableCell,
};

const EnhancedTable = ({
  columns,
  data,
  setData,
  updateMyData,
  skipPageReset,
}) => {
  const [show, setShow] = useState(false);
  const [empId, setempId] = useState(null);
  const [empAreaOfInterest, setEmpAreaOfInterest] = useState(null);

  const [empBenchDate, setEmpBenchDate] = useState(null);

  const [empDepartment, setEmpDepartment] = useState(null);

  const [empEmail, setEmpEmail] = useState(null);

  const [empEmployeeName, setEmpEmployeeName] = useState(null);

  const [empIndustryExperience, setEmpIndustryExperience] = useState(null);

  const [empSkills, setEmpSkills] = useState(null);

  const [empPodName, setEmpPodName] = useState(null);

  // added from saurabh
  const [likes, setlikes] = useState([]);
  useEffect(() => {
    // fetch(`http://localhost:8000/employees/getdata`)
    fetch(`http://localhost:8080/api/csv/employees/`)
      .then((res) => res.json())
      .then((data) => {
        //  console.log(data);
        setlikes(data);
      });
  }, []);

  columns = useMemo(() => COLUMNS, []);
  data = likes;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    gotoPage,
    setPageSize,
    preGlobalFilteredRows,
    setGlobalFilter,
    useResizeColumns,
    useFlexLayout,
    state: { pageIndex, pageSize, selectedRowIds, globalFilter },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      autoResetPage: !skipPageReset,
      // updateMyData isn't part of the API, but
      // anything we put into these options will
      // automatically be available on the instance.
      // That way we can call this function from our
      // cell renderer!
      updateMyData,
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.allColumns.push((columns) => [
        // Let's make a column for selection
        {
          id: "selection",
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox.  Pagination is a problem since this will select all
          // rows even though not all rows are on the current page.  The solution should
          // be server side pagination.  For one, the clients should not download all
          // rows in most cases.  The client should only download data for the current page.
          // In that case, getToggleAllRowsSelectedProps works fine.
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ]);
    }
  );

  const handleClose = () => {
    setShow(false);
  };

  const handleChangePage = (event, newPage) => {
    gotoPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPageSize(Number(event.target.value));
  };

  const EditDetails = (ID, Area, Date, Dept, Mail, Name, Exp, Skills, Pod) => {
    setempId(ID);

    setEmpAreaOfInterest(Area);

    setEmpBenchDate(Date);

    setEmpDepartment(Dept);

    setEmpEmail(Mail);

    setEmpEmployeeName(Name);

    setEmpIndustryExperience(Exp);

    setEmpSkills(Skills);

    setEmpPodName(Pod);

    setShow(true);
  };

  // const EditDetails = (empData,empId) => {

  //   setShow(true);
  // }

  const removeByIndexs = (array, indexs) =>
    array.filter((_, i) => indexs.includes(i));

  const deleteUserHandler = (event) => {
    console.log(`${data.employeeid}`);
    console.log(selectedRowIds);
    const deleteEmployees = removeByIndexs(
      data,
      Object.keys(selectedRowIds).map((x) => parseInt(x, 10))
    );

    // const deletedEmployeeId =deleteEmployees.forEach(element => {
    //   return element.employeeid
    // });

    const deletedEmployeeId = deleteEmployees.map((element) => {
      return element.employeeid;
    });

    console.log(deletedEmployeeId);
    // let newData = [];
    // selectedRowIds.forEach(d => {
    //   if (d.select) {
    //     newData.push(d.id);
    //   }
    // });

    // setData(deleteEmployees)
    // console.log(newData);

    fetch(`http://localhost:8080/api/employees/delete`, {
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      mode: "cors",
      method: "DELETE",
      body: JSON.stringify(deletedEmployeeId),
    })
      .then((data) => {
        console.log(data);
        // EnhancedTable(
        //   columns,
        //   data,
        //   setData,
        //   updateMyData,
        //   skipPageReset,);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  // const deleteUserHandler = event => {
  // }

  const addUserHandler = (user) => {
    // const newData = data.concat([user])
    // setData(newData)

    fetch(`http://localhost:8080/api/employees/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ employeeid, areaofinterest, benchdate, department, email, employeename, industryexperience, skills, podname })
      body: JSON.stringify(user),
    }).then((res) => {
      console.log(res);
      window.location.reload();
    });
  };

  // Render the UI for your table
  return (
    // <div style={{width: '80%'}}>
    <>
      {/* <div className='enhancedtablediv'> */}
      {show && (
        <ModalPopup
          id={empId}
          area={empAreaOfInterest}
          date={empBenchDate}
          dept={empDepartment}
          mail={empEmail}
          name={empEmployeeName}
          exp={empIndustryExperience}
          skill={empSkills}
          pod={empPodName}
          handleClose={handleClose}
        />
      )}

      <TableContainer style={{ textAlign: "center", width: "600" }}>
        <TableToolbar
          numSelected={Object.keys(selectedRowIds).length}
          deleteUserHandler={deleteUserHandler}
          addUserHandler={addUserHandler}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          globalFilter={globalFilter}
        />
        <MaUTable
          {...getTableProps()}
          style={{ width: "200%", textAlign: "center" }}
        >
          <TableHead style={{ tableLayout: "fixed", textAlign: "center" }}>
            {headerGroups.map((headerGroup) => (
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell
                    {...(column.id === "selection"
                      ? column.getHeaderProps()
                      : column.getHeaderProps(column.getSortByToggleProps()))}
                  >
                    {column.render("Header")}
                    {column.id !== "selection" ? (
                      <TableSortLabel
                        active={column.isSorted}
                        // react-table has a unsorted state which is not treated here
                        direction={column.isSortedDesc ? "desc" : "asc"}
                      />
                    ) : null}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        style={{ textAlign: "center" }}
                        {...cell.getCellProps()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}

                  <TableCell>
                    <div className="editbutton">
                      <Edit
                        color="primary"
                        onClick={() =>
                          EditDetails(
                            row.original.employeeid,
                            row.original.areaofinterest,
                            row.original.benchdate,
                            row.original.department,
                            row.original.email,
                            row.original.employeename,
                            row.original.industryexperience,
                            row.original.skills,
                            row.original.podname
                          )
                        }
                      />
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
            {/* {page.map((row, i) => {
            prepareRow(row)
            return (
              <TableRow {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <TableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })} */}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  { label: "All", value: data.length },
                ]}
                colSpan={3}
                count={data.length}
                rowsPerPage={pageSize}
                page={pageIndex}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </MaUTable>
      </TableContainer>
      {/* </div> */}
    </>
  );
};

EnhancedTable.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  updateMyData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  skipPageReset: PropTypes.bool.isRequired,
};

export default EnhancedTable;
