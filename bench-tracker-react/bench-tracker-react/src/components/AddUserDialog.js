import React, { useState } from 'react'

import AddIcon from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
// import MenuItem from '@mui/material/MenuItem';
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl, InputLabel, makeStyles, Select } from '@material-ui/core'


// const useStyles = makeStyles(theme => ({
//   formControl:{
//     minWidth:100
//   }
// }));

// const classes = useStyles();

const initialUser = {
  // firstName: '',
  // lastName: '',
  // age: 0,
  // visits: 0,
  // status: 'single',
  // progress: 0,

  employeename: '',
  employeeid:0,
  skills:'',
  industryexperience:0,
  department:'',
  areaofinterest:'',
  email:'',
  benchdate:'',
  podname:''
  // subRows: undefined,
}

const AddUserDialog = props => {
  const [user, setUser] = useState(initialUser)
  const { addUserHandler } = props
  const [open, setOpen] = React.useState(false)

  // const[errors,setErrors] = React.useState<{user.employeeid:string}>();


  const [switchState, setSwitchState] = React.useState({
    addMultiple: false,
  })

  const handleSwitchChange = name => event => {
    setSwitchState({ ...switchState, [name]: event.target.checked })
  }

  const resetSwitch = () => {
    setSwitchState({ addMultiple: false })
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    resetSwitch()
  }

  const handleAdd = event => {
    addUserHandler(user)
    setUser(initialUser)
    switchState.addMultiple ? setOpen(true) : setOpen(false)
  }

  const handleChange = name => ({ target: { value } }) => {
    setUser({ ...user, [name]: value })
  }




  return (
    <div>
      <Tooltip title="Add" data-testid="adding">
        <IconButton aria-label="add" onClick={handleClickOpen}>
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
          <DialogContentText><i>*Please make sure each field is correct.</i></DialogContentText>

          <TextField
            margin="dense"
            label="Employee_ID"
            type="number"
            fullWidth
            value={user.employeeid}
            onChange={handleChange('employeeid')}
            InputProps={{
              inputProps: { min: 0 }
            }}
            // required
            // error={Boolean(errors?.user.employeeid)}
          />
          <TextField
            autoFocus
            margin="dense"
            label="Employee_Name"
            type="text"
            fullWidth
            value={user.employeename}
            onChange={handleChange('employeename')}
          />
          <TextField
            margin="dense"
            label="Skills"
            type="text"
            fullWidth
            value={user.skills}
            onChange={handleChange('skills')}
          />
          <TextField
            margin="dense"
            label="Industry_Experience(in months)"
            type="number"
            fullWidth
            value={user.industryexperience}
            onChange={handleChange('industryexperience')}
            InputProps={{
              inputProps: { min: 0 }
            }}
          />
          {/* <TextField
            margin="dense"
            label="Department"
            type="text"
            fullWidth
            value={user.department}
            onChange={handleChange('department')}
          /> */}
{/* style={{marginLeft:40}} */}

        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel margin="dense"  >Department</InputLabel>
          {/* <InputLabelProps>flexShrink</InputLabelProps> */}
          <Select onChange={handleChange('department')} style={{minWidth:200}} >
           
            <MenuItem value= {"PPE"} > PPE </MenuItem>
            <MenuItem value= {"CES"} > CES </MenuItem>
            <MenuItem value= {"LTR"} > LTR </MenuItem>
            <MenuItem value= {"DAE"} > DAE </MenuItem>
            <MenuItem value= {"DA"} > DA </MenuItem>
            <MenuItem value= {"CEP"} > CEP </MenuItem>
            <MenuItem value= {"COE"} > COE </MenuItem>

          </Select>
        </FormControl>

          <TextField
            margin="dense"
            label="Area_Of_Interest"
            type="text"
            fullWidth
            value={user.areaofinterest}
            onChange={handleChange('areaofinterest')}
          />

          <TextField
            margin="dense"
            label="Email"
            type="text"
            fullWidth
            value={user.email}
            onChange={handleChange('email')}
          />

            <TextField
            margin="dense"
            label="Bench_Date"
            // placeholder="Bench Date"
            InputLabelProps={{ shrink: true }} 
            type="date"
            fullWidth
            value={user.benchdate}
            onChange={handleChange('benchdate')}
          />

            {/* <TextField
            margin="dense"
            label="Pod_Name"
            type="text"
            fullWidth
            value={user.podname}
            onChange={handleChange('podname')}
            /> */}



            {/* <FormControl className={classes.formControl}> */}
         <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel margin="dense">Pod_Name</InputLabel>
          <Select onChange={handleChange('podname')} style={{minWidth:300}}>
           
            <MenuItem value= {"MoAD"} > MoAD </MenuItem>
            <MenuItem value= {"Cloud Tranformation"} > Cloud Tranformation </MenuItem>
            <MenuItem value= {"XT"} > XT </MenuItem>
            <MenuItem value= {"QE"} > QE </MenuItem>

          </Select>
          </FormControl>
          {/* </FormControl> */}
        </DialogContent>
        <DialogActions>
          {/* <Tooltip title="Add multiple">
            <Switch
              checked={switchState.addMultiple}
              onChange={handleSwitchChange('addMultiple')}
              value="addMultiple"
              inputProps={{ 'aria-label': 'secondary checkbox' }}
            />
          </Tooltip> */}
          <Button onClick={handleClose} color="primary" data-testid="cancelbtn">
            Cancel
          </Button>
          <Button onClick={handleAdd} color="primary" className='addbtn'>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

AddUserDialog.propTypes = {
  addUserHandler: PropTypes.func.isRequired,
}

export default AddUserDialog
