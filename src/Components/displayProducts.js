import React, {Component} from 'react'
import FormPageProducts from './formPageProducts'

export default class displayProduct extends Component{
    constructor(props){
        super(props);


        }
        


    render(){
        let p = {products:[
            {
                id:1,
                name:'علی',
                province:'اصفهان',
                city:'کاشان',
                price:122,
                date:'2021/05/12'
            },{
                id:2,
                name:'احمد',
                province:'تهران',
                city:'شهریار',
                price:50,
                date:'2021/02/7'
            },{
                id:3,
                name:'رضا',
                province:'یزد',
                city:'بافق',
                price:74,
                date:'2020/10/02'
            }
        ]

    }


return(
<div>

<FormPageProducts products={p.products} />
</div>

)

    }


}