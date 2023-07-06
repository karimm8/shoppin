import React, { useEffect, useState } from 'react'
import './gallery.css'
import data from './products.json'
import Card from './Card'
export default function Gallery() {
  const [size, setSize] = useState('');
  const [filteredData, setFilteredData] = useState(data.data.products); 

  useEffect(() => {
    if(size) {
      setFilteredData(data.data.products.filter(product => product.availableSizes.includes(size)));
    } else {
      setFilteredData(data.data.products);
    }
  }, [size])

  return (
    <div className='gallery'>
        <h2>Listes du products</h2>
        <div className='btn'>
             <button onClick={() => setSize('XS')}>XS</button>
             <button onClick={() => setSize('S')}>S</button>
             <button onClick={() => setSize('S')}>M</button>
             <button onClick={() => setSize('Ml')}>ML</button>
             <button onClick={() => setSize('L')}>L</button>
             <button onClick={() => setSize('XL')}>XL</button>
             <button onClick={() => setSize('XXL')}>XXL</button>
        </div>
        <div className='cards'>
            {
              filteredData.length > 0 ?
              filteredData.map((e , i)=>{
                return(
                  <Card key={i} ele={e} />
                )
              }) : <p>Aucun produit</p>
            }
        </div>
    </div>
  )
}
