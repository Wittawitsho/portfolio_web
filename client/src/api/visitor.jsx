import axios from 'axios'

export const listVisitors = async (token) => {
    return axios.get('http://localhost:5000/api/visitors',{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
};

export const createMessage = async (form) => {
    return axios.post('http://localhost:5000/api/createMessage',form)
};