// creat type api

export interface loginData{
    username:string,
    password:string,
} 

interface RoleInt {
    roleId:number,
    roleNane:string,
}

export interface ListInt {
    id:number,
    username:string,
    role: RoleInt[],
}

interface SelectDataInt {
    role:number,
    username:string,
}

interface RoleListInt {
    roleId:number,
    roleName:string,
    right: number[],
}

interface AtiveInt {
    id:number,
    username:string,
    role: number[],
}

export class InitData {
    selectData:SelectDataInt = {
        role:0,
        username:'',
    }
    userList:ListInt[] = []
    roleList:RoleListInt[] =[]
    isShow = false
    ative:AtiveInt = {
        id:0,
        username:'',
        role: [],
    }


}