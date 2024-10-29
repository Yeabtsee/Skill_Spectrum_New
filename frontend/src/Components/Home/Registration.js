import React, { useState } from 'react';
import axios from 'axios';

const Registration = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [showResetPasswordForm, setShowResetPasswordForm] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        course: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
   

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if resetting password
        if (showResetPasswordForm) {
           
            try {
                const response = await axios.post('http://localhost:5000/api/forgot-password', { email: formData.email });
                console.log(response.data);
                alert(response.data.message || 'If this email is registered, a password reset link has been sent.');
                setShowResetPasswordForm(false); // Optionally hide the reset form
            } catch (error) {
                console.error("Error:", error);
                alert(error.response?.data?.message || 'Error sending password reset link');
            }
            return; // Exit after handling the reset password
        }

        const url = isLogin ? 'http://localhost:5000/api/users/login' : 'http://localhost:5000/api/users/register';
        const method = 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: formData.username, 
                    email: isLogin ? undefined : formData.email,
                    password: formData.password,
                    course: isLogin ? undefined : formData.course
                }),
            });
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }
            if (isLogin) {
                alert('Login successful!');
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                window.location.reload();
            } else {
                alert('Registration successful!');
            }
        } catch (error) {
            alert(error.message || 'An error occurred');
        }
    };
    const toggleResetForm = () => setShowResetPasswordForm(!showResetPasswordForm);

    return (
        <div className="container-fluid bg-registration py-5" id="register" style={{ margin: '90px 0' }}>
            <div className="container py-5">
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-5 mb-lg-0">
                        <div className="mb-4">
                            <h5 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '5px' }}>
                                Need Any Courses
                            </h5>
                            <h1 className="text-white">
                                {isLogin ? 'Login to Your Account' : 'Registrations are now open!'}
                            </h1>
                        </div>
                        {/* Existing informational text content */}
                    </div>
                    <div className="col-lg-5">
                        <div className="card border-0">
                            <div className="card-header bg-light text-center p-4">
                                <h1 className="m-0">{isLogin ? 'Login' : 'Sign Up Now'}</h1>
                            </div>
                            <div className="card-body rounded-bottom bg-primary p-5">
                                <form onSubmit={handleSubmit}>
                                    {!showResetPasswordForm ? (
                                        <>
                                            {isLogin ? (
                                                <>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            value={formData.username}
                                                            onChange={handleChange}
                                                            className="form-control border-0 p-4"
                                                            placeholder="Your username"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            className="form-control border-0 p-4"
                                                            placeholder="Your password"
                                                            required
                                                        />
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="username"
                                                            value={formData.username}
                                                            onChange={handleChange}
                                                            className="form-control border-0 p-4"
                                                            placeholder="Your name"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleChange}
                                                            className="form-control border-0 p-4"
                                                            placeholder="Your email"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <input
                                                            type="password"
                                                            name="password"
                                                            value={formData.password}
                                                            onChange={handleChange}
                                                            className="form-control border-0 p-4"
                                                            placeholder="Your password"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <select
                                                            name="course"
                                                            value={formData.course}
                                                            onChange={handleChange}
                                                            className="custom-select border-0 px-4"
                                                            style={{ height: '47px' }}
                                                            required
                                                        >
                                                            <option value="">Select a course</option>
                                                            <option value="Python">Computer Programming (Python)</option>
                                                            <option value="Graphics Design">Graphic Design</option>
                                                            <option value="Video Editing">Video Editing</option>
                                                        </select>
                                                    </div>
                                                    
                                                </>
                                            )}
                                            <div>
                                                <button
                                                    className="btn btn-dark btn-block border-0 py-3"
                                                    type="submit"
                                                >
                                                    {isLogin ? 'Login' : 'Sign Up Now'}
                                                </button>
                                                <div className="text-center mt-3">
                                                  <a
                                                      href="#"
                                                      style={{ color: 'white' }}
                                                      onClick={(e) => {
                                                          e.preventDefault();
                                                          setIsLogin(!isLogin);
                                                      }}
                                                  >
                                                      {isLogin ? "Don't have an account? Sign up now" : 'Already have an account? Sign in'}
                                                  </a>
                                               </div>
                                            </div>
                                            {isLogin && (
                                                <p
                                                    onClick={toggleResetForm}
                                                    style={{ cursor: 'pointer', color: 'white', marginTop: '10px', marginLeft: '30%'}}
                                                >
                                                    Forgot Password?
                                                </p>
                                            )}
                                            
                                        </>
                                    ) : (
                                        <>
                                            <h4 className="text-center text-white">Reset Password</h4>
                                          
                                              <div className="form-group">
                                                  <input
                                                      type="email"
                                                      name="email"
                                                      value={formData.email}
                                                      onChange={handleChange}
                                                      className="form-control border-0 p-4"
                                                      placeholder="Enter your email"
                                                      required
                                                  />
                                              </div>
                                              <button
                                                  className="btn btn-dark btn-block border-0 py-3"
                                                  type="submit"
                                              >
                                                  Send Reset Link
                                              </button>                    
                                            
                                            <p
                                                onClick={toggleResetForm}
                                                style={{ cursor: 'pointer', color: 'white', marginTop: '10px' }}
                                            >
                                                Back to Login
                                            </p>
                                        </>
                                    )}
                                </form>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
