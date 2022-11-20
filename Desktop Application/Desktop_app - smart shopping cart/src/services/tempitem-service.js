import axios from 'axios';
import Cookies from 'js-cookie';
import { hostAddress } from '../constant';

const API_URL = hostAddress;

class TempItemService {

    addItem(item) {
        const access = Cookies.get('access_token');
        console.log(access);
        console.log(item);
        return axios.post(API_URL + 'tempitems/add', item, { headers: { 'auth_token': access } })
            .then(res => {
                return res;
            })

    }


}
export default new TempItemService;