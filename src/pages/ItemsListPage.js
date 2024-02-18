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
        console.log(data);
        setProduct(data)
    }
    
    // get_products()
  return (
    <div className='flex justify-evenly pb-10 overflow-x-auto sm:justify-evenly'>
      
      {products.map((product, index) => (
        // <Items product={product} index={index}/>
        <Items key={index} product={product}/>
      ))}
    </div>
  )
}

export default ItemsListPage
// export const ScrollItemsListPage = () => {
//   <ReactSmartScroller>
//     <ItemsListPage/>
//   </ReactSmartScroller>
// }
