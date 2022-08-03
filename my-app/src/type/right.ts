export class InitData {
   
    roleList:RoleListInt[] =[]
    isShow = false
    ative:RoleListInt = {
        roleId:0,
        roleName:'',
        right: [],
    }
}

export interface RoleListInt {
    roleId:number,
    roleName:string,
    right: number[],
}