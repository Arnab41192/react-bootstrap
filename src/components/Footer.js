import React, { Fragment } from 'react'

const Footer = () => {
  return (

     <footer className='bg-dark text-white'>
        <div className="container p-3">
             <div className="row">
                <div className="col-md-3">
                    <h3>Vacations</h3>
                    <p className="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad eligendi natus tenetur eaque quod cum velit iusto, quos, voluptates in harum dolorem deserunt, ipsum aliquid. Non cumque illum quasi odit.</p>
                </div>
                <div className="col-md-3">
                    <h3>Information</h3>
                    <p>Adventures</p>
                    <p>Tours</p>
                    <p>Hotels</p>
                    <p>Destinations</p>
                    <p>Enquires</p>
                    <p>Online Bookings</p>
                 </div>

                 <div className="col-md-3">
                    <h3>Information</h3>
                    <p>Adventures</p>
                    <p>Tours</p>
                    <p>Hotels</p>
                    <p>Destinations</p>
                    <p>Enquires</p>
                    <p>Online Bookings</p>
                 </div>


                 <div className="col-md-3">
                    <h2>Address</h2>
                    <p>Flat No 283, Jubilee Hills</p>
                    <p>Pune 411014</p>

                    <div className="w-50 d-flex justify-content-between">
                        <i className="fa fa-facebook-square text-primary fa-2x"></i>
                        <i className="fa fa-twitter text-info fa-2x"></i>
                        <i className="fa fa-instagram text-danger fa-2x"></i>
                    </div>
                 </div>
             </div>
        </div>
     </footer>
  )
}

export default Footer