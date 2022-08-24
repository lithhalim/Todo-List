import React, { useContext, useEffect, useRef } from 'react';
import "./style/style.scss";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';


import {addItem} from '../redux/addItem';
import { useDispatch, useSelector } from 'react-redux';



function Form() {
    const data_Use=useRef();
    const dispatch=useDispatch();
    const select=useSelector((state)=>state.AddItemReducer)
    useEffect(()=>{
        window.localStorage.TodoListStorage=JSON.stringify(select)
    },[select])


    const Add_Item=()=>{
        let Difficalty=data_Use.current.sliderSection.value;
        let itemDetails=data_Use.current.itemDetails.value;
        let assignname=data_Use.current.assignname.value;
        let id=new Date();
        let status='pending'

        dispatch(addItem({Difficalty:Difficalty,itemDetails:itemDetails,assignname:assignname,id:id,status:status}))
        
    }


  return (
        <div className="form-container" >
            <p>Add To  Do Item</p>
                <form ref={data_Use}>
                    <label>to do item</label>
                    <input id="outlined-basic" placeholder="item Details" className="inpit" name="itemDetails" />

                    <label>to do item</label>
                    <input id="outlined-basic" placeholder="Assignee Name" label="Outlined"  className="inpit" name="assignname"/>   
                    <label>difficuilty</label>
                    <Box>
                        <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" name="sliderSection" />
                    </Box>
                    <div onClick={Add_Item}>
                        <Button variant="contained" >Add Item</Button>
                    </div>
                    
                </form>
        
        </div>

  )
}

export default Form




