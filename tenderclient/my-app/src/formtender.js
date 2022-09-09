import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useState} from 'react'
import CompanyForm from './formcom'


function TenderForm({textStyle, button,SetTender ,tender}) {

  const [name, setName] = useState("")
  const [serial, setSerial] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState("")
  
  function addForm(newTender) {
    SetTender([...tender, newTender])
  }
 
  

   function handleSubmit(event) {
    event.preventDefault();
    let newCompany={
      name:name,
      serial:serial,
      description:description,
      cost:cost,
      
    }

    fetch("http://localhost:9292/tenders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCompany)
      })
      .then(response => response.json())
      .then(data => {
       addForm(data) 
      })
    setName("")
    setSerial("")
    setDescription("")
    setCost("")
  }
  
  return (
    <div className='Form1'>
        <h2 className='fh'>Add New Tender</h2>
       <TextField id="outlined-basic" label="Name" variant="outlined" className={textStyle} onChange={(e) => setName(e.target.value)} value={name} />
       <TextField id="outlined-basic" label="Serial" variant="outlined" className={textStyle} onChange={(e) => setSerial(e.target.value)} value={serial} />
       <TextField id="outlined-basic" label="Description" variant="outlined" className={textStyle} onChange={(e) => setDescription(e.target.value)} value={description}  />
        <TextField id="outlined-basic" label="Cost" variant="outlined" className={textStyle} onChange={(e) => setCost(e.target.value)} value={cost} />
        <Button variant="contained" color="" className={button} onClick={handleSubmit}> Tender Post </Button>
        <CompanyForm/>
    </div>
  )
}
export default TenderForm