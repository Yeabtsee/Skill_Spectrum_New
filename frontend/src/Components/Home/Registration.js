import React from 'react'

const Registration = () => {
  return (
    <>
    <div className="container-fluid bg-registration py-5" id='register' style={{ margin: '90px 0' }}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: '5px'}}>Need Any Courses</h5>
                        <h1 className="text-white">Registrations are now open!</h1>
                    </div>
                    <p className="text-white">Secure your place by signing up for your desired course. Hurry up! We have a limited spot for each course.</p>
                    <p className="text-white"> What you will get after completion:</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>A valuable skill that will open new doors for your future.</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Opportunities to build connections with bright-minded individuals.</li>
                        <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Official recognition certificates from the university.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-light text-center p-4">
                            <h1 className="m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-primary p-5">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control border-0 p-4" placeholder="Your name" required="required" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control border-0 p-4" placeholder="Your email" required="required" />
                                </div>
                                <div className="form-group">
                                    <select className="custom-select border-0 px-4" style={{height: '47px'}}>
                                        <option selected>Select a course</option>
                                        <option value="1">Computer Programming (Python)</option>
                                        <option value="2">Graphic Design</option>
                                        <option value="3">Video Editing</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Registration