import React from 'react'

const Loading = () => {
  return (
    <>
     
      <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <h1 className="display-1 fw-bold">Loading...</h1>
                <p className="fs-3"> <span className="text-danger">Please Wait While Page Loads.</span></p>
                <p className='text-dark'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layort.</p>
                <button className="btn btn-primary">Go Home</button>
            </div>
        </div>
    </>
  )
}

export default Loading
