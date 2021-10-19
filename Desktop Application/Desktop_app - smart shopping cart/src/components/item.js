import React , {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import itemServices from '../services/item-service';
import AddNewItem from './AddNewItem';
import Header from './Header';
import Navigation from './Navigation';

export default function Item() {


    const [items, setItems] = useState([]);
    const [ addItemState, setAddItemState] = useState(false);
    const [successDelete, setSuccessDelete] = useState({result:false});
    const [successUpdate, setSuccessUpdate] = useState({result:false});
    const [updateItemKey, setUpdateItemKey] = useState('');
    const [updateItemState, setUpdateItemState] = useState(false);
    const [ newItem, setNewItem] = useState({});
    const [error, setErrors] = useState({});
    

useEffect(()=>{
        
            itemServices.getItem()
            .then(res => {console.log(res.data)
                //console.log(res);

            setItems( res.data)
            console.log(items, 'stet')

           
            })
                
            .catch(err=>{console.log(err)});
        
    }, [successDelete,successUpdate]);

    const handleDelete = (key) => {
         //console.log(key);
            console.log('pressed', key);

             itemServices.deleteItem(key)
            .then(res => {console.log(res.data)
                //console.log(res);
                if(res.data.success){
                    
                     setSuccessDelete({result:true});
                    
                    setTimeout(() => {
                        console.log('timeout');
                        
                        setSuccessDelete({result:false });
                    }, 6000);
                    
                }
                else {
                   setErrors({message:'Not Deleted! Try Again', result:true})
                      setTimeout(() => {
                        console.log('timeout');
                        
                         setErrors({result:false})
                    }, 6000);
                    
                    console.log('Not updated! try again')
                    console.log('try again');
                }
            

           
            })
                
            .catch(err=>{console.log(err)});
        
 
    }

    const handleAddItem = (bool) => {
        setAddItemState(bool);
    }

    const handleUpdate = (bool, key) => {
        setUpdateItemKey(key);
        setUpdateItemState(bool)
    }


    const handleSubmit = e => {
        console.log(newItem, 'in handleSubmit')
       // e.preventDefault();
        
           
            itemServices.updateItem(updateItemKey, newItem)
            .then(res => {console.log(res.data)
               if(res.data.success){
               setUpdateItemState(false)
               setSuccessUpdate({result:true});
                    
                    setTimeout(() => {
                        console.log('timeout');
                        
                        setSuccessUpdate({result:false });
                    }, 6000);
                    
                }
    
                else {
                     setErrors({message:'Incorrect Format,Not updated! Try Again', result:true})
                      setTimeout(() => {
                        console.log('timeout');
                        
                         setErrors({result:false})
                    }, 6000);
                    
                    console.log('Not updated! try again')
                }
    
            })
                
            .catch(err=>{console.log(err)});
 

      
       
        
    };
    const handleChange = e => { 
        setNewItem({...newItem, [e.target.name]:e.target.value});
        console.log(newItem);
      
    };

    

    return (
        <>
    <Navigation/>
    <Header/>

    <section id="main-content">
    <section className="wrapper">
        <div className="row">
        <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-table" />Item Details</h3>
            
            <ol className="breadcrumb">        
            <div></div>
            <li><i className="fa fa-home" /><Link to="/">Home</Link></li>
            <li><i className="fa fa-th-list" />Item Details</li>
            </ol>
        </div>
        </div>

        {successDelete.result ? 
        <div class='form-group has-success'>
                        <p className="control-label ">Item has been deleted successfully!</p>
        </div>
        :null}

        {successUpdate.result ? 
        <div class='form-group has-success'>
            <p className="control-label ">Item has been updated successfully!</p>
        </div>
        :null}

        {error.result ? 
        <div class='form-group has-error'>
            <p className="control-label ">{error.message}</p>
        </div>
        :null}

         {addItemState ? null :
                <a  style={{marginBottom:20}} onClick={()=>handleAddItem(true)} className="btn btn-primary" href="#">Add New Item  <i className="icon_plus_alt2" /></a> }

        {addItemState ? 
                <>
                    <AddNewItem/> 
                    <a  style={{marginBottom:20}} onClick={()=>handleAddItem(false)} className="btn btn-danger" href="#">Cancel  <i className="icon_close_alt2" /></a>
                </>
            :  null }


        {/* page start*/}
       
       
        <div className="row">
        <div className="col-lg-12">
         
            <section className="panel">
            {/* <header className="panel-heading">
                Advanced Table
            </header> */}
            <table className="table table-striped table-advance table-hover">
                <tbody>
                <tr>
                    <th><i className="icon_profile" /> Name</th>
                    <th><i className="icon_calendar" /> Category</th>
                    <th><i className="icon_mail_alt" /> Price</th>
                    <th><i className="icon_pin_alt" /> Stock</th>
                    <th><i className="icon_cogs" /> Action</th>
                    
                </tr>
                {items.map(((item) =>{
                if(item._id === updateItemKey && updateItemState){

                    return(
                        
                    <>
                   
                    <td>
                        <input type="text"  name="name"  onChange={handleChange} className='form-control2' placeholder={item.name}/>
                                        </td>
                    <td>  
                        <input type="text"  name="category" onChange={handleChange}  className='form-control2' placeholder={item.category}/>
                                        </td>
                    <td> 
                        <input type="text"  name="price" onChange={handleChange}  className='form-control2' placeholder={item.price}/>
                                        </td>
                    <td> 
                        <input type="text"  name="stock" onChange={handleChange}  className='form-control2' placeholder={item.stock}/>
                    </td>

                    
                     <div className="btn-group">
                        <a onClick = {() => handleSubmit(item._id)}  className="btn btn-success" href="#">Update   </a>
                    </div> 
                    <div className="btn-group">
                        <a onClick = {() => handleUpdate(false, '')}  className="btn btn-danger" href="#">Cancel   </a>
                    </div> 
                 
                   
                    </>
                     )



                }
                else{
                    return(
                <tr key={item._id}>
                    <td >{item.name}</td>
                    <td>{item.category}</td>
                    <td>{item.price}</td>
                    <td>{item.stock}</td>
                     
                    
                    <div className="btn-group">
                        <a onClick = {() => handleUpdate(true, item._id)}  className="btn btn-success" href="#">Update  <i className="icon_check_alt2" /></a>
                    </div> 
                    <div className="btn-group">
                        <a onClick = {() => handleDelete(item._id)}  className="btn btn-danger" href="#">Delete  <i className="icon_close_alt2" /></a>
                    </div> 
                     </tr>  
                    )}
                    }
                   
                     
               
            ))}

         
                </tbody>
            </table>
              
            </section>
           
        </div>
        </div>
        {/* page end*/}
    </section>
    </section>
    </>

    )
}
