import React, {useState, useEffect} from 'react'
import Items from '../components/Items'
// import { ReactSmartScroller } from 'react-smart-scroller'

const ItemsListPage = () => {

    let [products, setProduct] = useState([])
    useEffect(() => {
      get_products()
    }, [])

    let get_products = async () => {
        let response = await fetch("http://127.0.0.1:8000/api/products")
        let data = await response.json()
        let small = data.slice(0, 3)
        console.log(small);
        setProduct(small)
    }
    
    // get_products()
  return (
    <div className='flex  justify-center pb-10 overflow-x-auto'>
      {products.map((product, index) => (
        // <Items product={product} index={index}/>
        <Items key={index} product={product}/>
      ))}
    </div>
  )
}

export default ItemsListPage
