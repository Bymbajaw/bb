import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
        



  return (
    <div className='modal' style={{display: "block"}}>
        <div className='modal-body'>
            <div className='row'>
                <div className='col-md-12'>
                    <h2>Admin Login</h2>
                    <form>
                        <div className='mb3'>
                            <label className='form-label'>User name</label>
                            <input className='form-control'/>
                        </div>
                        <div className='mb3'>
                            <label className='form-label' type="e-mail">Password</label>
                            <input className='form-control' type="password"/>
                        </div>
                        <div className='mb3'>
                            <button onClick={() => navigate("/barchat")} className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
