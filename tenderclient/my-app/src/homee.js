import React from 'react'

function homee({tender}) {

  return (
    <div> <div className="row">
    <div className="col m-2">
      {tender.map((tenders)=>(
      <div className='card' style={{width : 25 + 'rem'}} >
         
          Tender Name: &nbsp;{tenders.name}<br></br>
          Serial NO: &nbsp;{tenders.serial}<br></br>
          Description: &nbsp;{tenders.description}<br></br>
          Application fee: &nbsp;{tenders.cost}<br></br>
          {tenders.companies.map((user)=>(
            <div key={user.id}>
            Company To Apply: &nbsp;{user.name}<br></br>
           Apply to: &nbsp;{user.email}<br></br>
           </div>
           ))}
          
        
        
       
      </div>))}
      </div>
      </div></div>
  ) 
}

export default homee