import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "./style/style.scss"
import {clearAllData} from "../redux/addItem"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


function Header() {
    const select=useSelector((state)=>state.AddItemReducer);
    const dispatch=useDispatch();

    const clearAll=()=>{
        dispatch(clearAllData())
    }

  return (
        <>
            <div className="header-container">
                    <ul className="main-nav">
                        <li className="nav-item">Home</li>
                        <li className="nav-item">Blog</li>
                    </ul>
            </div>  

            <div className="header-outpot" >
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
