import '../styles/Navbar.css'
import * as Icon from 'react-bootstrap-icons';

const Navbar = () => {
  return (
     <>

    <nav className="navbar navbar-expand-sm navbar-dark bg-teal">
      <div className="container">
              
             
              <a href="#" className="navbar-brand" >
                 Travel Yaari
              </a>

               <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#nv-id">
                <span className='navbar-toggler-icon'></span>
               </button>
              <div className="collapse navbar-collapse" id="nv-id">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item ">
                    <a href="#" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Search
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Visiting spots
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      Contact
                    </a>
                  </li>
              
                </ul>
              </div>
      </div>
    </nav>


   {/* Slider Section */}

    <section>
                  <div className="carousel slide" id="travel-slider" data-ride="carousel">

                    <div className="carousel-inner">

                        <div className="carousel-item col-sm-3">
                          <img src={require(`../images/img5.jpg`)} alt="" className='img-fluid w-100'/>  
                        </div>
                        <div className="carousel-item active col-sm-3">
                          <img src={require("../images/img6.jpg")} alt="" className='img-fluid w-100'/>  
                        </div>
                        <div className="carousel-item">
                          <img src={"require(../images/img7.jpg)"} alt="" className='img-fluid-w-100'/>  
                        </div>
                    </div>

                  </div>
    </section>

   
    </>
    
  );
};

export default Navbar;
