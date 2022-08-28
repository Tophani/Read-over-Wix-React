import React from 'react'
import './css/top5.css'
 function Top5 () {
  return (
    <div style={{width: '100%', height: 'auto', color:"white", display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
      <div className='t5txt' style={{width: '100%', height: '100px', display: 'flex', justifyContent: 'center', paddingLeft: '39%', paddingRight: '39%'}}>
        <h1 style={{color:'#EF5453', textAlign:"center", alignSelf: 'center'}}>So Many Books so Little Time</h1>
      </div>
      <div style={{width: '100%', height: '50px', display: 'flex', justifyContent: 'center'}}>
        <h3 style={{textAlign: 'center', alignSelf: 'center', color: 'black'}}>Get the next review straight to your mailbox</h3>
      </div>
      <div style={{width: 'full', height: 'auto', display: 'flex', flexDirection: 'column'}}>
        <div style={{width: 'full', height: '50px', display: 'flex', justifyContent: 'start', paddingLeft: '28%'}}>
          <h3 style={{color: 'gray', alignSelf: 'end'}}>Enter your email here *</h3>
        </div>
        <div style={{width: '100%', height: '200px', paddingLeft: '28%'}}>
          <input style={{paddingTop: '19px', width: '50%'}} type='text' />
          <button style={{paddingTop: '21px', paddingBottom: '3px', width: '15%', outline: 'none', backgroundColor: 'gray', border: 'none'}}>JOIN</button>
        </div>
      </div>
    </div>
  )
}
export default Top5;
