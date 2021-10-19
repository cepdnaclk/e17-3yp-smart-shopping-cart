import React, {useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import userService from '../services/user-service';


export default function ChangePassword() {

    const [password, setPassword] = useState({});
    const [ userUpdate, setUserUpdate] = useState({});
    const [error, setErrors] = useState({});
    const [successUpdate, setSuccessUpdate] = useState({});
    const [updating, setUpdating] = useState(false);



    useEffect(()=>{
       
        //let roleLen = profile.roles.length;

    
      
    },[updating, successUpdate, error])

    const handleChange = e => { 
        setPassword({...password, [e.target.name]:e.target.value});
    };

    const handleSubmit = e => {
        e.preventDefault();
        setUpdating(true);
        setErrors(validate(password));
        //setSubmit(true);
        console.log('pressed update')
    };

    const validate =  (values) => {
        
        const errors = {};
        let no = 0;
        console.log('update',no)
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.new_password && !values.current_password ){
        errors.all = 'No inputs given!';
            no=1
        }
        else{

        if(values.new_password.length < 6){
            errors.name = 'Password must be 6 characters long.'
            no = 1;
        }

        }

        if(no==0){

            userService.updatePassword(password)
            .then(res => {console.log(res.data)
               if(res.data.success){
              
               setUpdating(false);
               setSuccessUpdate({result:true});
               
                    setTimeout(() => {
                        console.log('timeout');
                        
                        setSuccessUpdate({result:false });
                    }, 6000);
                    
                }
    
                else {
                     setErrors({message:res.data.message, result:true})
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
        
        <div id="change-pass" className="tab-pane">
                    <section className="panel">
                        <div className="panel-body bio-graph-info">
                        <h1> Change Password</h1>
                        <div class='form-group has-error'>
                   
                        <p className="control-label ">{error.all}</p>
                    </div>

                     {successUpdate.result ? 
                    <div class='form-group has-success'>
                    <p className="control-label ">Password has been updated successfully!</p>
                    </div>
                    :null}

                    {error.result ? 
                    <div class='form-group has-error'>
                    <p className="control-label ">{error.message}</p>
                    </div>
                    :null}
                        <form className="form-horizontal" role="form" onChange={handleChange} onSubmit={handleSubmit}>
                            <div className="form-group">
                            <label className="col-lg-2 control-label">Current Password</label>
                            <div className="col-lg-6">
                                <input name= 'current_password' type="text" className="form-control"  />
                            </div>
                            </div>
                          
                            <div className="form-group">
                            <label className="col-lg-2 control-label">New Password</label>
                            <div className="col-lg-6">
                                <input name= 'new_password' type="text" className="form-control" />
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
                    </div>
                

        


       
   

    )
}
