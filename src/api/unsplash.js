import axios from 'axios';


export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 210fa3c42086cc73298f0e252a65f08457cc2bf4cb0e64e5d176ade5e0a93f6c'
	
	}
});