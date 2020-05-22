import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID clBtuojCemGZxQgx2UaqNoVm2YeBxwx3TIKylIEk1bk'
    }
})