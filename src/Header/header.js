import React, { useContext, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style/style.scss"
import {clearAllData} from "../redux/addItem"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { SketchPicker } from 'react-color';

import {motion} from "framer-motion"
import ColorLensIcon from '@mui/icons-material/ColorLens';

import { Color_Change_context } from '../context-api/change-theme';



function Header() {
    const buttonClick=useRef()
    const select=useSelector((state)=>state.AddItemReducer);
    const dispatch=useDispatch();
    const [color,setcolor]=useState("green");
    const [change_color_show,setchange_color_show]=useState(false);
    const changeColor=useContext(Color_Change_context)

    useEffect(()=>{
        document.addEventListener('mousedown',(event)=>{
            if(!buttonClick.current.contains(event.target))setchange_color_show(false)
        })
    })


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

  return (
        <>
            <div className="header-container">
                    <ul className="main-nav">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Blog</li>
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

                <div onClick={clearAll}>
                    <Button variant="outlined" style={{backgroundColor:"red",color:"white"}} startIcon={<DeleteIcon />}>
                        Clear All Data
                    </Button>
                </div>

            </div>



        
        </>
        
        )

}

export default Header
