import React from 'react'
import Menus1 from './Menus1'
import {Tabs, Tab, AppBar} from '@material-ui/core'

function Menus() {
    const [value,setValue]=React.useState(0)
    const HandleClick =(e,val)=>{
        setValue(val)

    }
    return (
        <div style={{fontSize:16}}>
            <AppBar position="static" color="default"> 
                <Tabs value={value}  onChange={HandleClick}>
                    <Tab label=" Items Details"/>
                    <Tab label=" Dispatch Details"/>
                    <Tab label=" General Details"/>
                    <Tab label=" Expense Details"/>
                </Tabs>
                <TabsPannel value={value} index={0}>
                    <Menus1 /> 
                </TabsPannel>
                <TabsPannel value={value} index={1}> More Dispatch Details</TabsPannel>
                <TabsPannel value={value} index={2}> More General  Details </TabsPannel>
                <TabsPannel value={value} index={3}> More About Expense </TabsPannel>
            </AppBar>
            
        </div>
    )
}
function TabsPannel( props){
    const {children,value,index}=props
    return(
        <div>
            {
                value===index && (
                    <h1>{children}</h1>

                )
            }
           
        </div>
    )
}

export default Menus
