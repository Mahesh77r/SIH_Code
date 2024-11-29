import React from 'react'
import ProfileRegForm from './ProfileRegForm'

export default function Profileform() {
  return (
   <>
   <div className="row ">
      <div className="col-lg-3">
        <div className="card mb-3">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
              className="rounded-circle img-fluid" />
            <h5 className="my-3">GANESH</h5>
            <p className="text-muted mb-1">Full Stack Developer</p>
            <p className="text-muted mb-4">Ganesh Nagar,Wardha</p>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" className="btn btn-primary">Edit</button>
              
            </div>
          </div>
        </div>
      </div>
       
       
      
     <div className="col-lg-8" d-flex>
        {/*<div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Ganesh Golhar</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">ganesh.golhar35@gmail.com</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Phone</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">705858****</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">705858****</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">Ganesh Nagar,Wardha</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p className="mb-1" >Web Design</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >Website Markup</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >One Page</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >Mobile Template</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >Backend API</p>
                <div className="progress rounded mb-2" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p className="mb-1" >Web Design</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >Website Markup</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >One Page</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >Mobile Template</p>
                <div className="progress rounded" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="mt-4 mb-1" >Backend API</p>
                <div className="progress rounded mb-2" >
                  <div className="progress-bar" role="progressbar"  aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          </div> */}
          <ProfileRegForm/>
          </div>
          </div>
   
   </>
  )
}