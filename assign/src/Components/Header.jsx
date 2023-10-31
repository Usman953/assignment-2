import kidsummer from './screenshot.jpg'


const Header = () => {
  return (
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                       <img src={kidsummer} alt='Camp in Summmer' height="400px" className=''/>
                      <h1 className='p-4 font-weight-bold'>Athlete Registration in Summer Camp</h1>
                    </div>
                </div>
            <div class="container"> 
            <div className="athlete_info">
            <hr className="hr up" />
            <h4 className="font-weight-bold py-3 px-5">Athlete Information</h4>
            <hr className="hr down" />
            </div>
            <form className="formy">
                <div class="row my-5">
                    <h6 className="font-weight-bold">Athlete's Name</h6>
                    <div className="col pt-1">
                        <div className="form-outline"> 
                        <input type="text" className="form-control"/>
                        <div className="form-text">First Name</div>
                    </div>
    
                </div>
                    <div className="col pt-1">
                        <div className="form-outline">
                            <input type="text" className="form-control"/>
                            <div className="form-text">Last Name</div>
                        </div>
                    </div>
                </div>
    
                <div class="row my-5">
                    <h6 className="font-weight-bold">Birth Date</h6>
                    <div className="col pt-1">
                        <div className="form-outline"> 
                        <select type="text" className="form-select"/>
                        <div className="form-text">Month</div>
                    </div>
                </div>
                    <div className="col pt-1">
                        <div className="form-outline">
                            <select type="text" className="form-select"/>   
                            <div className="form-text">Day</div>
                        </div>
                    </div>
    
                    <div className="col pt-1">
                        <div className="form-outline">
                            <select type="text" className="form-select"/>
                            <div className="form-text">Year</div>
                        </div>
                    </div>
                </div>
    
                <div class="row my-5">
                    <h6 className="font-weight-bold">Grade</h6>
                    <div className="col-6 pt-1">
                        <div className="form-outline"> 
                        <input type="text" className="form-control" placeholder="ex:4"/>
                    </div>
                </div>
                </div>
    
                <div class="row mt-5">
                    <h6 className="font-weight-bold">Gender</h6>
                    <div className="col-12 pt-1">
                        <div className="form-check"> 
                        <input class="form-check-input" type="radio" name="gender" id="male" value="male"/>
                        <label class="form-check-label" for="male">Male</label>
                        </div>
                    </div>
    
                    <div className="col-12 pt-1">
                        <div className="form-check"> 
                        <input class="form-check-input" type="radio" name="gender" id="female" value="female"/>
                        <label class="form-check-label" for="female">Female</label>
                        </div>
                    </div>
    
                </div>
               
    
                <div class="row my-5">
                    <h6 className="font-weight-bold">Address</h6>
                    <div className="col-12 pt-1">
                        <div className="form-outline"> 
                        <input type="text" className="form-control"/>
                        <div className="form-text">Street Address</div>
                        </div>
                    </div>
    
                    <div className="col-12 pt-4">
                        <div className="form-outline">
                            <input type="text" className="form-control"/>
                            <div className="form-text">Street Address Line 2</div>
                        </div>
                    </div>
    
                    <div className="col pt-4">
                        <div className="form-outline">
                            <input type="text" className="form-control"/>
                            <div className="form-text">City</div>
                        </div>
                    </div>
                    <div className="col pt-4">
                        <div className="form-outline">
                            <input type="text" className="form-control"/>
                            <div className="form-text">State / Province</div>
                        </div>
                    </div>
    
                    <div className="col-12 pt-4">
                        <div className="form-outline">
                            <input type="text" className="form-control"/>
                            <div className="form-text">Postal / ZipCode</div>
                        </div>
                    </div>
                </div>
    
            </form>
      </div>
      <div class="container"> 
        <div className="athlete_info">
        <h4 className="font-weight-bold py-3 px-5"><u>Parent/Guardian Information</u></h4>
        </div>
        <form className="formy">
            <div class="row my-5">
                <h6 className="font-weight-bold">Name</h6>
                <div className="col pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control"/>
                    <div className="form-text">First Name</div>
                </div>

            </div>
                <div className="col pt-1">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Last Name</div>
                    </div>
                </div>
            </div>

            

            <div class="row my-5">
                <h6 className="font-weight-bold">Home Number</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Cell Number</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">E-mail</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="ex:myname@example.com"/>
                    <div className="form-text">example@example.com</div>
                </div>
            </div>
            </div>
        </form>
  </div>
  <div class="container"> 
        <div className="athlete_info">
        <h4 className="font-weight-bold py-3 px-5"><u>Emergency Information</u></h4>
        </div>
        <form className="formy">
            
            <div class="row mt-5">
            <h6 className="font-weight-bold col-6">Emergency Contact's Name</h6>
            <h6 className="font-weight-bold col-6">Relationship</h6>
            </div>
            <div class="row mb-5">
                <div className="col-3 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control"/>
                    <div className="form-text">First Name</div>
                </div>

            </div>
                <div className="col-3 pt-1">
                    <div className="form-outline">
                        <input type="text" className="form-control"/>
                        <div className="form-text">Last Name</div>
                    </div>
                </div>
                
                <div className="col-6">
                
                    <div className="form-outline">
                        <select type="text" className="form-select" placeholder="Please Select">
                        <option>Please Select</option>
                        </select>
                    </div>
                </div>

            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Phone Number</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>

            <div class="row my-5">
                <h6 className="font-weight-bold">Alt. Phone Number</h6>
                <div className="col-6 pt-1">
                    <div className="form-outline"> 
                    <input type="text" className="form-control" placeholder="(000) 000-0000"/>
                </div>
            </div>
            </div>
               

        </form>
  </div>
  <div class="container"> 
    <div className="athlete_info">
    <h4 className="font-weight-bold py-3 px-5"><u>Submission</u></h4>
    </div>
    <form className="formy">
        
        <div class="row mt-5">
        <h6 className="font-weight-bold col-6">Date</h6>
        <h6 className="font-weight-bold col-6">Signature</h6>
        </div>

        <div class="row mb-5">
            <div className="col-6 pt-1">
            <div class="form-outline">
            <input placeholder="MM-DD-YYYY" type="text" class="form-control"/>
            <i class="fas fa-calendar input-prefix"></i>
            </div>
            <div className="form-text">Date</div>
        </div>
        

        
            <div className="col-6 pt-1">
                <div className="form-outline"> 
                <textarea class="form-control" id="textAreaExample1" rows="4"></textarea>
            </div>
        </div>
        </div>




        <hr className="hr up" />

        <div class="row my-5">
            <div className="col-12 justify-content-center d-flex mb-5">
            <button type="button" class="btn btn-success px-4">Submit Form</button>
        </div>
        </div>


    </form>
</div>
      </div>);
};
export default Header;
