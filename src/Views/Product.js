import React from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../Components/Loader'
import { useAxiosGet } from '../Hooks/HttpRequests'            // {x, y} = foo;
                                                               // x = foo.x;
                                                               //y = foo.y;
function Product(){
    const { id } = useParams()                            // { id } is object destucturing assignment           we use useParams to describe dynamic segments of the URL and then is has to be used in the dynamic segment of the URL
    // Create your own Mock API: https://mockapi.io/
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/products/${id}`   // `` to get value from variable and $ sign
    
    let product = useAxiosGet(url)

    let content = null

    if(product.error){
        content = 
        <div>
            <div className="bg-blue-300 mb-2 p-3">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if(product.loading){
        content = <Loader></Loader>
    }
    // This is going to be in our ../Product/{id}  section!  

    if(product.data){
        content = 
        <div>
            <h1 className="text-3xl font-bold mb-3">
                {product.data.name}                         
            </h1>
            <div>
                <img
                    src={product.data.images[0].imageUrl}
                    alt={product.data.name}
                />
            </div>
            <div className="font-bold text-3xl mb-3">
                $ {product.data.price}
            </div>
            <div>
                {product.data.description}
            </div>
        </div>
    }

    return (
        <div className="container mx-auto">    {/*  To center a container, use the .mx-auto utility: */}
            {content}
        </div>
    )
}

export default Product