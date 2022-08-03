import service from './index'
import { loginData } from '../type/user'


const api = {
    login: (data:loginData)=>{
        return service({
            url:'/api/user',
            method:'POST',
            data
        })
    },
    
    goods: ()=>{
        return service({
            url: '/api/goods',
            method: 'GET',
        })
    },

    users: ()=>{
        return service({
            url: '/api/user',
            method: 'GET',
        })
    },

    roles: ()=>{
        return service({
            url: '/api/role',
            method: 'GET',
        })
    }
}

export default api