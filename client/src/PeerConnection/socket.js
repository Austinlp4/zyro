import io from 'socket.io-client';

const socket = io('https://zyro-one.herokuapp.com/');
export default socket;