import React from 'react'
import "./NewEntry.css"
import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import ClearIcon from '@material-ui/icons/Clear';
import EmailIcon from '@material-ui/icons/Email';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import CheckIcon from '@material-ui/icons/Check';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import PrintIcon from '@material-ui/icons/Print';
import PaymentIcon from '@material-ui/icons/Payment';
// import { Person } from '@material-ui/icons';
import Menus from './Menus'

function NewEntry() {
    return (
        <>

            <div>
                <div className="New_button">
                    <h4> CREATE SALES ORDER -(51) </h4>

                    <CalendarViewDayIcon />
                    <Button variant="contained" color="default"> <PrintIcon />  </Button>
                    <Button variant="contained" color="default">
                        <ClearIcon />
                    </Button>
                    <Button variant="contained" color="default">
                        <PaymentIcon />
                    </Button>
                    <Button variant="contained" color="default">
                        <EmailIcon />
                    </Button>
                    <Button variant="contained" color="default">
                        < PhoneAndroidIcon />
                    </Button>
                    <Button variant="contained" color="default">
                        < CheckIcon />
                    </Button>
                    <Button variant="contained" color="default">
                        <ThumbUpAltIcon />
                    </Button>
                </div>
                <div className="bottom_field">
                    <div className="input_field">
                        <h4>Series</h4>
                        <div style={{ display: "flex" }}>
                            {/* <Person className="personIcon" /> */}
                            <div>
                                <Select labelId="label" id="select" value="20" variant="outlined" style={{ width: 200 }}>
                                    <MenuItem value="10">Ten</MenuItem>
                                    <MenuItem value="20">Twenty</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="input_field">
                        <h4>Date</h4>
                        <form className="form_date" noValidate>
                            <TextField
                                variant="outlined"
                                id="date"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                    <div className="input_field">
                        <h4>Party</h4>
                        <div>
                            {/* <Person className="personIcon" /> */}
                            <TextField variant="outlined" style={{width:400}} />
                        </div>
                    </div>
                    <div className="input_field">
                        <h4>Short Name</h4>
                        <div>
                            {/* <Person className="personIcon" /> */}
                            <TextField variant="outlined" />
                        </div>
                    </div>
                </div>
                <div className="bottom_field">
                    <div className="input_field">
                        <h4>Series</h4>
                        <div style={{ display: "flex" }}>
                            {/* <Person className="personIcon" /> */}
                            <div>
                                <Select labelId="label" id="select" value="20" variant="outlined" style={{ width: 200 }}>
                                    <MenuItem value="10">Ten</MenuItem>
                                    <MenuItem value="20">Twenty</MenuItem>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="input_field">
                        <h4> Delivery Date</h4>
                        <form className="form_date" noValidate  >
                            <TextField 
                                variant="outlined"
                                id="date"
                                type="date"
                                defaultValue="2017-05-24"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </div>
                    <div className="input_field">
                        <h4>S.O Terms</h4>
                        <div>
                            {/* <Person className="personIcon" /> */}
                            <TextField variant="outlined" style={{width:400}} />
                        </div>
                    </div>
                 
                </div>
                
            </div>
            <Menus/>

        </>
    )
}

export default NewEntry
