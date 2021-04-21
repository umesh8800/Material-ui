import React from 'react';
import { Button, MenuItem, Select, TextField } from '@material-ui/core'
import "./Page.css"
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import { Person } from '@material-ui/icons';
import {useHistory} from 'react-router-dom'

function Page() {
    const history = useHistory();
	function newHandle() {
		history.push("/newentry")
	}
    return (
        <>
            <div className="top_buttons">
                <h4 className="icons_margin">SALES ORDER -(51) </h4>
                <CalendarViewDayIcon className="icons_margin" />
                <Button  style={{marginRight: 10}} variant="contained" color="primary">GO</Button>
                <Button  style={{marginRight: 10}} variant="contained" color="default" onClick={newHandle}>
                    New Entry
                </Button>
                <Button  style={{marginRight: 10}} variant="contained" color="default">
                    All Pending Orders
                </Button>
                <Button  style={{marginRight: 10}} variant="contained" color="default">
                    Adv Payment
                </Button>
            </div>

            <div className="bottom_part">
                <div>
                    <h4>Fr Dt</h4>
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

                <div>
                    <h4>To Dt</h4>
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

                <div>
                    <h4>Series</h4>
                    <div style={{display:"flex"}}>
                        <Person className="personIcon" />
                        <div>
                            <Select labelId="label" id="select" value="20" variant="outlined" style={{width:200}}>
                                <MenuItem value="10">Ten</MenuItem>
                                <MenuItem value="20">Twenty</MenuItem>
                            </Select>
                        </div>
                    </div>
                </div>

                <div>
                    <h4>Party</h4>
                    <div>
                        <Person className="personIcon" />
                        <TextField variant="outlined" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Page
