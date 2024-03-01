import React, {useState, useEffect} from 'react'
import Flowers from './Flowers'

const FlowerList = () => {

    let [products, setProduct] = useState([])
    useEffect(() => {
      get_products()
    }, [])

    let get_products = async () => {
        let response = await fetch("http://127.0.0.1:8000/api/products")
        let data = await response.json()
        console.log(data);
        setProduct(data)
    }

  return (
    <div>
        <div className='flex flex-wrap justify-center pb-10 overflow-x-auto '>
            {products.map((product, index) => (
            // <Items product={product} index={index}/>
            <Flowers key={index} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default FlowerList
