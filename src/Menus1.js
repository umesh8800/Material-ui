import React from 'react'
import { Button, MenuItem, responsiveFontSizes, Select, TextareaAutosize, TextField } from '@material-ui/core'
import "./Menus1.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

function Menus1() {
    return (
        < div style={{fontSize:16}}>
            <div className="menus_123">
                <div className="input_field">
                    <h4>Item Code</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        <TextField variant="outlined" style={{ width: 120 }} />
                    </div>
                </div>

                <div className="input_field">
                    <h4 >Item Name / Avail Stock</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        <TextField variant="outlined" style={{ width: 250 }} />
                    </div>
                </div>

                <div className="input_field">
                    <h4>City1</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        <TextField variant="outlined" placeholder="City1" style={{ width: 120 }} />
                    </div>
                </div>

                <div className="input_field">
                    <h4>Sub Unit/</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        <TextField variant="outlined" placeholder="Sub Unit" style={{ width: 120 }} />
                    </div>
                </div>

                <div className="input_field">
                    <h4>Net Wt City</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        <TextField variant="outlined" placeholder="City2" style={{ width: 120 }} />
                    </div>
                </div>
                <div className="input_field">
                    <h4>Rate On:</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        <TextField variant="outlined" placeholder="Rate" style={{ width: 220 }} />
                    </div>
                </div>
                <div className="input_field">
                    <h4>Amount</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        <TextField variant="outlined" placeholder="Amount" style={{ width: 120 }} />
                    </div>
                </div>
                <Button variant="contained" style={{ marginTop: 60, height: 54, background:"green" }}>
                    ADD
                </Button>
                <Button variant="contained" color="default" style={{ marginTop: 60, height: 52 }}>
                    <ArrowDownwardIcon />

                </Button>

            </div>
            <div className="text_div">
                <h4>Sl No.</h4>
                <h4>Code </h4>
                <h4>Item</h4>
                <h4>City</h4>
                <h4>UOM</h4>
                <h4>Net Wt</h4>
                <h4> UOM</h4>
                <h4>Rate</h4>
                <h4>Basic Amt</h4>
                <h4>Total Amt</h4>

            </div>

            <div className="input_field">
                    <h4>Remarks</h4>
                    <div>
                        {/* <Person className="personIcon" /> */}
                        {/* <TextField variant="outlined" placeholder="Amount" style={{ width: 660,height:400}} /> */}

                        <TextareaAutosize style={{width:600,height:100}}></TextareaAutosize>
                    </div>
                </div>

        </div>
    )
}

export default Menus1
