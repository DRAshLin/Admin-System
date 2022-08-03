// creat type api

export interface ListInt {
    userId:number,
    id:number,
    title:string,
    introduce:string,
}

interface selectDateInt {
    title:string,
    introduce:string,
    page:number,
    count:number,
    pagecount:number,
}

export class InitData {

    selectData:selectDateInt = {
        //初始化数据，设置默认值
        title:'',
        introduce:'',
        page:1,
        count:0,
        pagecount:5,
    }
    

    // 数据为一个空数组，数据类型为 ListInt
    list:ListInt[] = []
}