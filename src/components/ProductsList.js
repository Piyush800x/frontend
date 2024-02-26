import React, {useState, useEffect} from 'react'
import Items from '../components/Items'

const ProductsList = () => {
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
            <Items key={index} product={product}/>
            ))}
        </div>
    </div>
  )
}

export default ProductsList
