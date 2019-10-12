import React from 'react';

const categories = ()=>{
    return(
        <section id="pricing" class="py-5 bg-secondary">
        <div class="container-fluid">
          
            <div class="row">
                <div class="col text-center">
                    <h1 class="display-4 text-uppercase text-dark mb-0">
                        <strong>pricing</strong>
                    </h1>
                    <div class="title-underline bg-primary"></div>
                    <p class="mt-2 text-capitalize text-white">Lorem ipsum dolor sit amet.</p>
                </div>

            </div>
           
            <div class="row">
             
                <div class="col-md-4 my-4">
                    <div class="card">
                       
                        <div class="card-header bg-primary text-white text-uppercase text-center py-4">
                            <h3>standard</h3>
                        </div>
                      
                        <div class="card-title text-center my-3">
                            <h4>
                                <sup>$</sup>5
                                <sub>/month</sub>
                            </h4>
                        </div>
                   
                        <ul class="list-group list-group-flush text-center">
                            <li class="list-group-item">Lorem, ipsum dolor.</li>
                            <li class="list-group-item">Lorem, ipsum dolor.</li>
                            <li class="list-group-item">Lorem, ipsum dolor.</li>
                        </ul>
                     
                        <div class="card-footer">
                            <a href="" class="btn btn-outline-dark btn-block text-capitalize">sign up</a>
                        </div>
                    </div>
                </div>
               
                <div class="col-md-4 my-4">
                    <div class="card">
                        
                        <div class="card-header bg-primary text-white text-uppercase text-center py-4">
                            <h3>basic</h3>
                        </div>
                      
                        <div class="card-title text-center my-3">
                            <h4>
                                <sup>$</sup>10
                                <sub>/month</sub>
                            </h4>
                        </div>
                      
                        <div class="card-body">

                            <ul class="list-group text-center">
                                <li class="list-group-item">Lorem, ipsum dolor.</li>
                                <li class="list-group-item">Lorem, ipsum dolor.</li>
                                <li class="list-group-item">Lorem, ipsum dolor.</li>
                            </ul>
                        </div>
                       
                        <div class="card-footer">
                            <a href="" class="btn btn-outline-dark btn-block text-capitalize">sign up</a>
                        </div>
                    </div>
                </div>
              
                <div class="col-md-4 my-4">
                    <div class="card">
                        
                        <div class="card-header bg-primary text-white text-uppercase text-center py-4">
                            <h3>pro</h3>
                        </div>
                        
                        <div class="card-title text-center my-3">
                            <h4>
                                <sup>$</sup>15
                                <sub>/month</sub>
                            </h4>
                        </div>
                       
                        <ul class="list-group text-center">
                            <li class="list-group-item">Lorem, ipsum dolor.</li>
                            <li class="list-group-item">Lorem, ipsum dolor.</li>
                            <li class="list-group-item">Lorem, ipsum dolor.</li>
                        </ul>
                       
                        <div class="card-footer">
                            <a href="" class="btn btn-outline-dark btn-block text-capitalize">sign up</a>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    )
}

export default categories;