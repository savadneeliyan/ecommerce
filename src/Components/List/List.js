import React from 'react'
import Card from '../Cards/Card'
import './List.css'

function List() {
    const data = [
        {
            id:1,
            img:"https://images.pexels.com/photos/12446372/pexels-photo-12446372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/3053824/pexels-photo-3053824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Long Sleeve graphic t-Shirt",
            isNew:true,
            oldPrice:19,
            price:12
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/12922525/pexels-photo-12922525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/10857809/pexels-photo-10857809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            isNew:false,
            oldPrice:19,
            price:12
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/12820465/pexels-photo-12820465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/11021985/pexels-photo-11021985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt",
            isNew:false,
            oldPrice:19,
            price:12
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/6256328/pexels-photo-6256328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/12223289/pexels-photo-12223289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Autisctic",
            isNew:false,
            oldPrice:19,
            price:12
        },
        {
            id:5,
            img:"https://images.pexels.com/photos/6210323/pexels-photo-6210323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/12452982/pexels-photo-12452982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Full T-Shit",
            isNew:true,
            oldPrice:19,
            price:12
        },
    ]
    
  return (
    <div className='list'>
        {data.map(item => (
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List