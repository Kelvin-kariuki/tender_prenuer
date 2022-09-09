import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import {useState, useEffect} from 'react'


function CompanyForm({textStyle, button}) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [company, SetCompany] = useState("")
  const [tender_id, setTender_id] = useState("")
 
  
  function addForm(newCompany) {
    SetCompany([...company, newCompany])
  }
 
  

   function handleSubmit(event) {
    event.preventDefault();
    let newCompany={
      name:name,
      email:email,
      tender_id:tender_id,
      
    }

    fetch("http://localhost:9292/company", {
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
    setEmail("")
    setTender_id("")
  }
  
  return (
    <div className='Form1'>
        {/* <h2>Add New Tender</h2> */}
       <TextField id="outlined-basic" label="Company Name" variant="outlined" className={textStyle} onChange={(e) => setName(e.target.value)} value={name} />
       <TextField id="outlined-basic" label="Email" variant="outlined" className={textStyle} onChange={(e) => setEmail(e.target.value)} value={email} />
       <TextField id="outlined-basic" label="Tender_ID" variant="outlined" className={textStyle} onChange={(e) => setTender_id(e.target.value)} value={tender_id}  />
        <Button variant="contained" color="" className={button} onClick={handleSubmit}> Company Post </Button>

    </div>
  )
}
export default CompanyForm