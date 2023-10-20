import React from 'react'

const Error = () => {
  return (
    <div>
      <div>
      <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">Error</h1>
                <p className="fs-3"> <span className="text-danger">Opps!</span> Something Went Wrong .</p>
                <p className="lead">
                    Please Try Again Later.
                  </p>
                  <button className="btn btn-primary">Go Home</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Error
