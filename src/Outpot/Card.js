import React, { useContext } from 'react'
import DangerousIcon from '@mui/icons-material/Dangerous';
import "./style.scss/style.scss";
import Button from '@mui/material/Button';
import Moment from 'react-moment';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

import {motion} from "framer-motion"

import { RemoveItem } from '../redux/addItem';
import { useDispatch } from 'react-redux';
import { EditeStatus } from '../redux/addItem';


import { Login_Create_Context } from '../context-api/context-authntication';


function Card({dataUse}) {
  const {Difficalty,assignname,itemDetails,id}=dataUse;
    let status=dataUse.status;


    //----------------------------check the capapilty and the authntication---------------------------//
    const Authntication=useContext(Login_Create_Context);
    if(Authntication.UserName_Password==""){window.location.href="/"}
    const {capabilities}=Authntication.UserName_Password;
    let check_Delete=capabilities.search("delete")
    let check_Update=capabilities.search("update")



    const dispatch=useDispatch()

    const deleteItem=(e)=>{
      let deleteItem=e.currentTarget.getAttribute("datatype");
      dispatch(RemoveItem(deleteItem))
    }

    const changeStatus=(e)=>{
      let editeType=e.currentTarget.getAttribute("datatype");
      dispatch(EditeStatus(editeType))
    }
  return (
    <motion.div className="Card-container" initial={{x:"-200px",opacity:"0"}} animate={{x:"0px",opacity:"1"}} transition={{duration:".5"}}>
        <div className="card-header">
            <div style={{width:"200px"}}>
                {status=='pending'?<p className="status" >pending</p>:<p className="status active">Complete</p>}
                <p className="name-section"> {assignname}</p>
            </div>
            <Moment fromNow ago>{id}</Moment>
            {check_Delete!==-1?
            <div onClick={deleteItem} datatype={id}>
              <DangerousIcon style={{cursor: "pointer"}}/>
            </div>
            :<></>}
        </div>
        <p className="output-discreption">{itemDetails}</p>
        <div className="change-status" >  
            {status=="pending"&&check_Update!==-1?
              <div onClick={changeStatus} datatype={id}>
                <Button variant="text" style={{marginLeft: "-10px",color:'red'}}  ><AssignmentTurnedInIcon/> Press To comblete</Button>
              </div>
            :<></>}
            <p className="difficelty"> diffecilty:{Difficalty}%</p>
        </div>
      
    </motion.div>
  )
}

export default Card
