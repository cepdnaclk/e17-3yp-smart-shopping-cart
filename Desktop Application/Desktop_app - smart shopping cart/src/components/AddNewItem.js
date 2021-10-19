import React, {useState, useEffect, useContext} from 'react';
import itemServices from '../services/item-service';


const AddNewItem = () =>{

    const [ newItem, setNewItem] = useState({});
    const [error, setErrors] = useState({});


    const handleChange = e => { 
        setNewItem({...newItem, [e.target.name]:e.target.value});
      
    };

    const handleSubmit = e => {
        
       // e.preventDefault();
        if(!newItem.name || !newItem.price || !newItem.category || !newItem.stock )
            setErrors({all:'Fields cannot be empty!'});
        else{ 
            setErrors({});
            itemServices.addItem(newItem)
            .then(res => {console.log(res.data)
               if(!res.data.success)
                setErrors({all:res.data});
            })
                
            .catch(err=>{console.log(err)});


        }
       
        
    };
    return(
         <section >
         <div class='form-group has-error'>
                        <p className="control-label ">{error.all}</p>
        </div>
        <form  action=''  onChange={handleChange} onSubmit={handleSubmit}> 
         <table className="table">
                                        <thead>
                                            <tr>
                                                <th  >Name</th>
                                                <th  >Price</th>
                                                <th>Stock</th>
                                                <th>Category</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <td>
                                            <input type="text"  name="name"  className="form-control " />
                                        </td>
                                        <td>
                                            <input type="text"  name="price" className="form-control " />
                                        </td>
                                        <td>
                                            <input type="text"  name="stock" className="form-control " />
                                            
                                        </td>
                                        <td>
                                            <input type="text"  name="category" className="form-control " />
                                        </td>
                                        </tbody>
                                        <tfoot>
                                            <tr><td colSpan="4">
                                                <button ontype="button" className="btn btn-primary text-center">Add  <i className="fa fa-plus-circle" aria-hidden="true"></i></button>
                                                
                                            </td></tr>
                                        </tfoot>
                                    </table>
                
                </form>
                </section>
               
                
    )
}

export default AddNewItem;