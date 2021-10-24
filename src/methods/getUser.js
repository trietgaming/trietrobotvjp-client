import axios from 'axios';
import { SERVER_URL } from '../config.json';

async function getUser(withInventory) {
  let user;
  try {
    user = await axios.get(`${SERVER_URL}/auth/accounts/login${withInventory? '?withInventory=true': ''}`, {withCredentials: true});
      return user.data;
  }
  catch {
    return false;
  }
}

export {getUser};
