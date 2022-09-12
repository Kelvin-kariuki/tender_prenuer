import React from 'react'


function homee({tender, setTender}) {

  function handleDelete(id) {
    // Server API PATH
    fetch(`http://localhost:9292/tenders/${id}`, {
      method: 'DELETE',
    })
      .then((r) => r.json())
      .then(() => {
        const deleteTender = tender.filter((tenders) => tenders.id !== id)
        setTender(deleteTender)
      })
  }


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
           {/* Setting up an event listener */}
           <button onClick= {(e) => handleDelete(tenders.id)}>Delete</button>
           </div>
           ))}
          
        
        
       
      </div>))}
      </div>
      
      </div></div>
  ) 
}

export default homee