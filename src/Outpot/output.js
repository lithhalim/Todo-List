import React, { useContext, useState } from 'react';
import Card from "../Outpot/Card";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



import {Color_Change_context} from "../context-api/change-theme"



function Output() {
  const [alignment, setAlignment] = React.useState('allType');
  const [paginationPage,setpaginationPage]=useState('1');
  const select =useSelector(state=>state.AddItemReducer);
  const DataPagination=useContext(Color_Change_context)




  const pagination=(e)=>{
    setpaginationPage(e.currentTarget.textContent)
  }

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  let dataUsing
  if(select.allItem.length>0){
    let padding=[];
    let complite=[];
    select.allItem.forEach((a)=>{
      a.status=="pending"?padding.push(a):complite.push(a)
    })
    let dataUse=padding.concat(complite)

    let dataModify=dataUse.slice((paginationPage-1)*DataPagination.Number_Pagination,(paginationPage)*DataPagination.Number_Pagination)
      if(alignment!=='allType'){
          dataUsing=dataModify.map((a,i)=>{
              if(a.status==alignment){
                return <Card dataUse={a} key={i}/>
              }        
          })
  }else{
    dataUsing=dataModify.map((a,i)=>(<Card dataUse={a} key={i}/>))
  }
  }

  return (
    <div className="output-container" >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            className='toggel-container'
          >
            <ToggleButton  style={{width:"150px"}} color='warning' value="allType">All Type</ToggleButton>
            <ToggleButton   style={{width:"150px"}} color='warning' value="pending">pending</ToggleButton>
            <ToggleButton   style={{width:"150px"}} color='warning' value="complete">Complete</ToggleButton>
            <ToggleButton   style={{width:"150px"}} color='warning' value="disaple">Disaple</ToggleButton>
          </ToggleButtonGroup>

          {dataUsing!==undefined?dataUsing:<></>}

          <div className='pagination'>
            <Stack spacing={2}>
              <Pagination count={10} variant="outlined"  onChange={pagination}/>
            </Stack>
          </div>
    </div>
  )
}

export default Output
