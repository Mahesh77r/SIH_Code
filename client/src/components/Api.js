import axios from 'axios';


const Url = 'http://localhost:8080';

//GroundAuthority Crud Opertions

export const addGroundUser = async (data) => {
    return await axios.post(`${Url}/groundAuthorityregistion/add`, data);
}

export const getUsers = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/${id}`);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${Url}/${id}`);
}

export const editUser = async (id, user) => {
    return await axios.put(`${Url}/${id}`, user)
}




//EventOrganizer Crud Operation


export const addEventUser = async (data) => {
    return await axios.post(`${Url}/eventorganizer/add`,data);
}

export const getEventUsers = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/eventorganizer/${id}`);
}

export const deleteEventUser = async (id) => {
    return await axios.delete(`${Url}/eventorganizer/${id}`);
}

export const editEventUser = async (id, user) => {
    return await axios.put(`${Url}/eventorganizer/${id}`, user)
}


//Club Crud operation


export const addClubUser = async (data) => {
    return await axios.post(`${Url}/clubregistration/add`,data);
}

export const getClubUsers = async (id) => {
    id = id || '';
    return await axios.get(`${Url}/clubregistration/${id}`);
}

export const deleteClubUser = async (id) => {
    return await axios.delete(`${Url}/clubregistration/${id}`);
}

export const editClubUser = async (id, user) => {
    return await axios.put(`${Url}/clubregistration/${id}`, user)
}

// Inventory Table Crud operation

const inventoryUrl = 'http://localhost:8080/groundAuthorityregistion/datatable';

export const addItem = async (data) => {
    return await axios.post(`${inventoryUrl}/add`, data);
}

export const getItem = async (id) => {
    id = id || '';
    return await axios.get(`${inventoryUrl}/${id}`);
}

export const deleteItem = async (id) => {
    return await axios.delete(`${inventoryUrl}/${id}`);
}


export const editItem = async (id, user) => {
    return await axios.put(`${inventoryUrl}/${id}`, user)
}



//Logins For All StakeHolders

export const groundLogin = async (user) => {
    try {
        return await axios.post(`${Url}/groundAuthoritylogin`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const eventLogin = async (user) => {
    try {
        return await axios.post(`${Url}/eventlogin`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const clubLogin = async (user) => {
    try {
        return await axios.post(`${Url}/clublogin`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

//Npfai 
const npfaiUrl = 'http://localhost:8080/npfai';

export const npfaiReg = async (user) => {
    try {
        return await axios.post(`${npfaiUrl}/registration`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const npfaiLogin = async (user) => {
    try {
        return await axios.post(`${npfaiUrl}/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export const npfaiOpenmodule = async (user) => {
    try {
        return await axios.post(`${npfaiUrl}/openmodule`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}