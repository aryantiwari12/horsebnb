import React from 'react';
import IMAGE from "../../IMG/logo_horse.png";
import "../header/style.css";
import 'react-phone-number-input/style.css'
import { useState } from 'react';
// import PhoneInput from 'react-phone-number-input';
import Input from 'react-phone-number-input/input'
import PhoneInput, { formatPhoneNumber, formatPhoneNumberIntl } from 'react-phone-number-input'
const Header = () => {

    const [value, setValue] = useState()
   
    return (
        <div>

            <nav class="navbar navbar-expand-lg shadow">
                <div class="container-fluid">
                    <img src={IMAGE}></img>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div class="d-flex" role="search">
                            <button className='me-5 border-0 bg-white fs-5' data-bs-toggle="modal" data-bs-target="#exampleModal">Login</button>
                            <button class="btn btn- text-white fs-5" data-bs-toggle="modal" data-bs-target="#exampleModal1" type="submit" style={{ backgroundColor: "#54BAB9" }}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* First Modal */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className='form-control' placeholder='Email Address'></input>
                            <input type="text" className='form-control mt-2' placeholder='Password'></input>
                            <div className='d-flex algin-item-center justifiy-content-center'>
                                <div className='col-6 text-start  d-flex'>
                                    <input type="checkbox" className='pt-2 px-2'></input>
                                    <p className=' pt-2 px-2'>Remember me</p>
                                </div>
                                <div className='col-6  text-end pt-2 p-3'>
                                    <p className='text-success'>Forgot Password?</p>
                                </div>
                            </div>
                            <button className='w-100 border-0 p-2  text-white rounded' style={{ backgroundColor: "#54BAB9" }}>Log in</button>
                            <div className='mt-2'>
                                <strong className='mt-2'>Or Continue with</strong>

                                <button className='border p-2 w-100'>Login with Facebook</button>
                                <button className='border p-2 w-100 mt-2'>Login with Google</button>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <p className='mx-auto'>Don't have an HorseBnB account ? <a className='text-danger' role="button"> Sign Up</a></p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Second modal */}

            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <input type="text" className='form-control' placeholder='first Name'></input>
                            <input type="text" className='form-control mt-2' placeholder='Last Name'></input>
                            <input type="text" className='form-control mt-2' placeholder='Enter Email'></input>
                            <PhoneInput placeholder="Enter phone number" className='form-control mt-2' value={value} border-0 onChange={setValue}
                             defaultCountry={value} country="US"
                            />
                            <input type="text" className='form-control mt-2' placeholder='Password'></input>
                            <input type="text" className='form-control mt-2' placeholder='Confirm password'></input>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>




























        </div>
    )
}

export default Header