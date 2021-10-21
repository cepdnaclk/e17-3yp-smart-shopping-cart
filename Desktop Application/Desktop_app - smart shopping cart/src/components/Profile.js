import React, {useState, useEffect} from 'react'
import Navigation from './Navigation';
import Header from './Header';
import Cookies from 'js-cookie';
import userService from '../services/user-service';
import ChangePassword from './changePassword';
import UploadImg from './uploadProfileImage';


export default function Profile() {

    const [profile, setProfile] = useState({});
    const [ userUpdate, setUserUpdate] = useState({});
    const [error, setErrors] = useState({});
    const [successUpdate, setSuccessUpdate] = useState({});
    const [updating, setUpdating] = useState(false);



    useEffect(()=>{
        let name = Cookies.get( 'name'  );
        let address = Cookies.get( 'address' ); 
        let nic = Cookies.get( 'nic' );
        let phoneno = Cookies.get( 'phoneno'  );
        let email = Cookies.get( 'email' );
        let roles = JSON.parse(Cookies.get( 'roles' ));
        //let roleLen = profile.roles.length;

        setProfile({name, address, nic, phoneno, email, roles});
      
    },[updating, successUpdate, error])

    const handleChange = e => { 
        setUserUpdate({...userUpdate, [e.target.name]:e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUpdating(true);
        setErrors(validate(userUpdate));
        //setSubmit(true);
        console.log('pressed update')
    };

    const validate =  (values) => {
        
        const errors = {};
        let no = 0;
        console.log('update',no)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.name && !values.email && !values.address && !values.nic && !values.phoneno && !values.password){
        errors.all = 'No inputs given!';
            no=1
        }
        else{

        if(values.name.length < 6){
            errors.name = 'Name must be 6 characters long.'
            no = 1;
        }

  
        // if(!regex.test(values.email)){
        //     errors.email = 'This is not a valid email format!';  
        //     no = 1;
        // }
        // if(values.password.length < 6 ){
        //     errors.password = 'Password must be 6 characters long.';
        //     no = 1;
        // }
        }

        if(no==0){

            userService.updateUser(userUpdate)
            .then(res => {console.log(res.data)
               if(res.data.success){
                userService.getUser();
               setUpdating(false);
               setSuccessUpdate({result:true});
               
                    setTimeout(() => {
                        console.log('timeout');
                        
                        setSuccessUpdate({result:false });
                    }, 6000);
                    
                }
    
                else {
                     setErrors({message:'Not updated! Try Again', result:true})
                      setTimeout(() => {
                        console.log('timeout');
                        
                         setErrors({result:false})
                    }, 6000);
                    setUpdating(false);
                    console.log('Not updated! try again')
                }
    
            })
                
            .catch(err=>{console.log(err)});
 
        }
       
     
        
        
        return errors;
    }

    return (
        <>
        <Navigation/>
        <Header/>
    <div>
    {/*main content start*/}
    <section id="main-content">
        <section className="wrapper">
        <div className="row">
            <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-user-md" /> Profile</h3>
            <ol className="breadcrumb">
                <li><i className="fa fa-home" /><a href="index.html">Home</a></li>
                {/* <li><i className="icon_documents_alt" />Pages</li> */}
                <li><i className="fa fa-user-md" />Profile</li>
            </ol>
            </div>
        </div>
        <div className="row">
            {/* profile-widget */}
            <div className="col-lg-12">
            <div className="profile-widget profile-widget-info">
                <div className="panel-body">
                <div className="col-lg-2 col-sm-2">
                    <h4>{profile.name}</h4>
                    <div className="follow-ava">
                    <img src="img/profile.png" width="62px" height="62px"/>

                    </div>
                    <h6>Employee</h6>
                </div>
                <div className="col-lg-4 col-sm-4 follow-info">
                    {/* <p>Hello I’m Jenifer Smith, a leading expert in interactive and creative design.</p>
                    <p>@jenifersmith</p> */}
                    <p><i className="fa fa-mail">{profile.email}</i></p>
                    {/* <h6>
                    <span><i className="icon_clock_alt" />11:05 AM</span>
                    <span><i className="icon_calendar" />25.10.13</span>
                    <span><i className="icon_pin_alt" />NY</span>
                    </h6> */}
                </div>
              
                </div>
            </div>
            </div>
        </div>
        {/* page start*/}
        <div className="row">
            <div className="col-lg-12">
            <section className="panel">
                <header className="panel-heading tab-bg-info">
                <ul className="nav nav-tabs">
                    
                    <li>
                    <a data-toggle="tab" href="#profile">
                        <i className="icon-user" />
                        Profile
                    </a>
                    </li>
                    <li className>
                    <a data-toggle="tab" href="#edit-profile">
                        <i className="icon-envelope" />
                        Edit Profile
                    </a>
                    </li>
                    <li className>
                    <a data-toggle="tab" href="#change-pass">
                        <i className="icon-envelope" />
                        Update Password
                    </a>
                    </li>
                    <li className>
                    <a data-toggle="tab" href="#change-img">
                        <i className="icon-user" />
                       Upload Profile Picture
                    </a>
                    </li>  
                </ul>
                </header>
                <div className="panel-body">
                <div className="tab-content">
                   
                    {/* profile */}
                    <div id="profile" className="tab-pane">
                    <section className="panel">
                        
                        <div className="panel-body bio-graph-info">
                        <h1>Bio Graph</h1>
                        <div className="row">
                            <div className="bio-row">
                            <p><span>Name </span>: {profile.name} </p>
                            </div>
                            
                            {/* <div className="bio-row">
                            <p><span>Birthday</span>: 27 August 1987</p>
                            </div> */}
                            <div className="bio-row">
                            <p><span>NIC </span>: {profile.nic}</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Address </span>:  {profile.address}</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Email </span>: {profile.email}</p>
                            </div>
                            <div className="bio-row">
                            <p><span>Phone </span>:  {profile.phoneno}</p>
                            </div>
                            {/* <div className="bio-row">
                            <p><span>Access </span>:  </p>
                           
                            {
                             (profile.roles).map((role)=>(
                            <p>{profile.role[role]}</p>)
                            )
                          
                            }
                            </div> 
                         */}
                        </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                        </div>
                    </section>
                    </div>
                    {/* edit-profile */}
                    <div id="edit-profile" className="tab-pane">
                    <section className="panel">
                        <div className="panel-body bio-graph-info">
                        <h1> Profile Info</h1>
                        <div class='form-group has-error'>
                   
                        <p className="control-label ">{error.all}</p>
                    </div>

                     {successUpdate.result ? 
        <div class='form-group has-success'>
            <p className="control-label ">Profile has been updated successfully!</p>
        </div>
        :null}

        {error.result ? 
        <div class='form-group has-error'>
            <p className="control-label ">{error.message}</p>
        </div>
        :null}
                        <form className="form-horizontal" role="form" onChange={handleChange} onSubmit={handleSubmit}>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Name</label>
                            <div className="col-lg-6">
                                <input name= 'name' type="text" className="form-control"  placeholder={profile.name} />
                            </div>
                            </div>
                          
                            {
                            error.name?
                            (
                            <>
                            <div >
                            <p  style={{color:'red', fontWeight:'bold'}}>{error.name}</p>
                            </div>
                            </>)
                            :null
                            }
                           
 
                            
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Address</label>
                            <div className="col-lg-6">
                                <input name= 'address' type="text" className="form-control" placeholder={profile.address} />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">NIC</label>
                            <div className="col-lg-6">
                                <input name='nic' type="text" className="form-control" placeholder={profile.nic} />
                            </div>
                            </div>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Phone No</label>
                            <div className="col-lg-6">
                                <input name='phoneno' type="text" className="form-control" placeholder={profile.phoneno} />
                            </div>
                            </div>
                            
                           
                            <div className="form-group">
                            <div className="col-lg-offset-2 col-lg-10">
                                <button onPress= {handleSubmit} type="submit" className="btn btn-primary">Save</button>
                                <a href='' type="button" className="btn btn-danger">Cancel</a>
                            </div>
                            </div>
                        </form>
                        </div>
                    </section>
                   


                    <section>
                        <div className="row">
                        </div>
                    </section>
                    </div>
                  

        <div id="change-pass" className="tab-pane">
        <section className="panel">
        <div className="panel-body bio-graph-info">
                   <ChangePassword/>
                   </div>
                   </section>

                   <section>
                        <div className="row">
                        </div>
                    </section>
                    </div>
                   
                

                    <div id="change-img" className="tab-pane">
        <section className="panel">

                   <UploadImg/>
                   </section>
                    </div>
                
                
                </div>
                </div>
            </section>
            </div>
        </div>


        
        
                

        


        {/* page end*/}
        </section>
    </section>
    {/*main content end*/}</div>

    </>

    )
}
