import axios from 'axios';

const instance = axios.create({
  baseURL:'https://react-my-burger-d5cb0.firebaseio.com/'
});

export default instance;