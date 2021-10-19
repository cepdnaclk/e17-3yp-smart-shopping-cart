import {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

 
function Protected(props) {

    let Cmp = props.Cmp; 
    let history = useHistory();

    useEffect(() => {
        if(!localStorage.getItem('isLoggedIn')){
            history.push('/')
        }
    } ,[])

    return(
        <div>
            <Cmp/>
        </div>
    )

}

export default Protected;