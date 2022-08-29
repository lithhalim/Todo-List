import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style/style.scss"
import {clearAllData} from "../redux/addItem"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { SketchPicker } from 'react-color';
import PersonIcon from '@mui/icons-material/Person';

import {motion} from "framer-motion"
import ColorLensIcon from '@mui/icons-material/ColorLens';

import { Color_Change_context } from '../context-api/change-theme';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router';





import {Login_Create_Context} from "../context-api/context-authntication"
let data
if(window.localStorage.token){
    data=JSON.parse(  window.localStorage.token   )
}


function Header() {
    const buttonClick=useRef();
    const Navi=useNavigate()
    const select=useSelector((state)=>state.AddItemReducer);
    const dispatch=useDispatch();
    const [color,setcolor]=useState("green");
    const [change_color_show,setchange_color_show]=useState(false);
    const changeColor=useContext(Color_Change_context)


    //--------------------------------authintication check -------------------------------------------//
    const Authntication=useContext(Login_Create_Context);
    if(Authntication.UserName_Password==""){window.location.href="/"}
    const {capabilities,name}=Authntication.UserName_Password;
    let CheckCapipilty=capabilities.search("delete")
    const logout_section=()=>{
        window.localStorage.removeItem("token")
        Navi("/")
    }



    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  





    useEffect(()=>{
        document.addEventListener('mousedown',(event)=>{
            if(!buttonClick.current.contains(event.target))setchange_color_show(false)
        })
    })

    useEffect(()=>{
        if(data==undefined){window.location.href="/"}
    },[])


    const clearAll=()=>{
        dispatch(clearAllData());
    }

    const changedTheColor=(e)=>{
        setcolor(e.hex)
        changeColor.setcolor(e.hex)
    }

    

    const changeColorShow=()=>{
        change_color_show==false?setchange_color_show(true):setchange_color_show(false)
    }

    const selectElement=(e)=>{
        changeColor.setNumber_Pagination(e.target.value);
        window.localStorage.NumberItemPagination=e.target.value;
    }

  return (
        <>
            <div className="header-container">
                    <ul className="main-nav">
                        <li> <PersonIcon/><span style={{marginLeft:"10px",marginTop:"2px"}}>{name}</span> </li>
                        <li onClick={logout_section} style={{color:"red"}}><LogoutIcon/> <span style={{marginLeft:"10px",marginTop:"2px"}}>Logout</span> </li>
                    </ul>
                    <div>
                      <p onClick={changeColorShow}  className="changeName-button"><span> Change Color </span><ColorLensIcon/></p>
                      {change_color_show==true?
                        <motion.div className='color-changer' ref={buttonClick}>
                            <SketchPicker  color={color} onChange={changedTheColor}/>
                        </motion.div>:<></>}
                    </div>
            </div>  

            <div className="header-outpot" style={{backgroundColor:changeColor.color}} >
                <p>
                    To Do List Manager ({select.NumberItem})
                </p>

                <div>
                    <label >Number Page Shown ({ window.localStorage.NumberItemPagination}) change:</label>
                    <select className='header-select' onChange={selectElement}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Foure</option>
                            <option value="5">Five</option>
                            <option value="6">Sex</option>

                    </select>
                </div>

                {CheckCapipilty!==-1?
                <div onClick={clearAll}>
                    <Button variant="outlined" style={{backgroundColor:"red",color:"white"}} startIcon={<DeleteIcon />}>
                        Clear All Data
                    </Button>
                </div>
                :<></>}

            </div>



        
        </>
        
        )

}

export default Header
