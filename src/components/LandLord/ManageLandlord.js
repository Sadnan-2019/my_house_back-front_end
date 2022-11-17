import React from 'react';
import img from "../../assets/avater.jpg";
const ManageLandlord = () => {
    return (
        <div>
            <main id="main" class="main">
          <section class="section dashboard"> 
            <div className='container'>
                <div className='row'>
                <div className='col-lg-12 '>
           

            <div class="col-12">
                    <div class="card top-selling overflow-auto">
                      {/* <div class="filter">
                        <a class="icon" href="#" data-bs-toggle="dropdown">
                          <i class="bi bi-three-dots"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                          <li class="dropdown-header text-start">
                            <h6>Filter</h6>
                          </li>

                          <li>
                            <a class="dropdown-item" href="#">
                              Today
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Month
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              This Year
                            </a>
                          </li>
                        </ul>
                      </div> */}

                      <div class="card-body pb-0">
                        <h5 class="card-title">
                        All Landlord  
                        </h5>

                        <table class="table table-borderless">
                          <thead>
                            <tr>
                            <th scope="col">SL N</th>
                              <th scope="col">Image</th>
                              <th scope="col">Name</th>
                             
                              <th scope="col">NID</th>
                              <th scope="col">Flate</th>
                              <th scope="col">Email</th>
                              <th scope="col">Mobile</th>
                              <th scope="col">Division</th>
                              <th scope="col">Thana</th>
                              <th scope="col">Road</th>
                              <th scope="col">Action</th>
                            
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                            <td class="text-dark fw-bold">1</td>
                              <th scope="row">
                                <a href="#">
                                  <img src={img} alt="" />
                                </a>
                              </th>
                              <td>
                               
                                Abul Kashem
                               
                              </td>
                              <td>199247098567</td>
                              <td class="fw-bold">124</td>
                              <td>house@com.bd</td>
                              <td>01718000000</td>
                              <td>Dhaka</td>
                              <td>Dhanmondi</td>
                              <td>6</td>
                            
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                            <td class="text-dark fw-bold">2</td>
                              <th scope="row">
                                <a href="#">
                                <img src={img} alt="" />
                                </a>
                              </th>
                              <td>
                               
                               Abul Hashem
                              
                             </td>
                              <td>199247098567</td>
                              <td class="fw-bold">124</td>
                              <td>house@com.bd</td>
                              <td>01718000000</td>
                              <td>Dhaka</td>
                              <td>Dhanmondi</td>
                              <td>6</td>
                            
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                            <td class="text-dark fw-bold">3</td>
                              <th scope="row">
                                <a href="#">
                                <img src={img} alt="" />
                                </a>
                              </th>
                              <td>
                               
                                Abul Momen
                              </td>
                              <td>199247098567</td>
                              <td class="fw-bold">98</td>
                              <td>house@com.bd</td>
                              <td>01718000000</td>
                              <td>Dhaka</td>
                              <td>Dhanmondi</td>
                              <td>6</td>
                            
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                            <td class="text-dark fw-bold">4 </td>
                              <th scope="row">
                                <a href="#">
                                <img src={img} alt="" />
                                </a>
                              </th>
                              <td>
                               
                             Abul Lotif
                               
                              </td>
                              <td>199247098567</td>
                              <td class="fw-bold">74</td>
                              <td>house@com.bd</td>
                              <td>01718000000</td>
                              <td>Dhaka</td>
                              <td>Dhanmondi</td>
                              <td>6</td>
                            
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                            <td class="text-dark fw-bold">5 </td>
                              <th scope="row">
                                <a href="#">
                                <img src={img} alt="" />
                                </a>
                              </th>
                              <td>
                               
                                Abul Kader
                               
                              </td>
                              <td>199247098567</td>
                              <td class="fw-bold">63</td>
                              <td>house@com.bd</td>
                              <td>01718000000</td>
                              <td>Dhaka</td>
                              <td>Dhanmondi</td>
                              <td>6</td>
                            
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                            <tr>
                            {/* <th scope="row">6</th> */}
                            <td class="text-dark fw-bold">6 </td>
                              <th scope="row">
                                <a href="#">
                                <img src={img} alt="" />
                                </a>
                              </th>
                              <td>
                               
                               Abul Malek
                             </td>
                              <td>199247098567</td>
                              <td class="fw-bold">41</td>
                              <td>house@com.bd</td>
                              <td>01718000000</td>
                              <td>Dhaka</td>
                              <td>Dhanmondi</td>
                              <td>6</td>
                            
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-trash"></i></a></td>
                              <td><a href="#" class="btn btn-danger btn-sm" ><i class="bi bi-pencil-square"></i></a></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>


                </div>
            </div>
            </section>
            </main>
        </div>
    );
};

export default ManageLandlord;