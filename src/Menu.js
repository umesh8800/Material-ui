import React from 'react'
import {Tabs,Tab,AppBar} from '@material-ui/core';
import Booking from './Booking'
import Manifest from './Manifest';
import Delivery_Dtls from './Delivery_Dtls';
import Co_Loader from './Co_Loader'
import Comunique from './Comunique';
import './TReck.css';

function Tracking() {
const [value,setValue]=React.useState(0)
const HandleTabs=(e, val)=>{
    console.log(val);
    setValue(val)
}

    return (
        < >
            <h3 style={{ marginLeft: '40px' }}> CONSIGNMENT TRACKING</h3>
            <hr style={{ border: '1px dotted black', height: '0%', width: '80%', marginLeft: '40px' }} />

            <div className='container' style={{ height: '130px', width: '600px', border: "1px solid black" }}>
                <div className="treck"><input type="checkbox" className="mr-1" />CONSIGNMENT NO</div>
                <div className="treck"><input type="checkbox" className="mr-1"  />REF NO</div>
                <div className="treck"><input type="checkbox" className="mr-1"  />COMPLAIN NO</div><br /><br />

                <form>
                    TRACK
                            <input className="input_box" type="text" />
                </form>
            </div>
            <br/><br/><br/><br/>
            <div className="container" style={{border:'1px solid black',height:'500px'}}>
                <br/>
                <AppBar position='static'>
                    <Tabs value="value" onChange={HandleTabs}>
                        <Tab label="BOOKING DTLS"/>
                        <Tab label="MANIFEST DTLS"/>
                        <Tab label="DELIVERY"/>
                        <Tab label="CO LOADER"/>
                        <Tab label="COMUNIQUE"/>
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>First</TabPanel>
                <TabPanel value={value} index={1}> Secound</TabPanel>
                <TabPanel value={value} index={2}>Third</TabPanel>
                <TabPanel value={value} index={3}>Fourth</TabPanel>
                <TabPanel value={value} index={4}>Fifth</TabPanel>
         
</div>



        </>
    )
}
function TabPanel(props){
    const {children,value,index}=props
    return(
        <div>
            {
                value===index &&(
                    <h1>{children}</h1>
                )
            }
        </div>
    )
}

export default Tracking