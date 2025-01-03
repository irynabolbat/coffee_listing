import { useEffect, useState } from 'react';
import './List.scss';
import Product from '../Product/Product';
import { filteredProducts } from '../../assets/utils/filteredProducts';

function List({productsStatus}) {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
    .then(response => response.json())
    .then(data => setItems(data))
    .catch(error => console.error(error));
  }, [])

  return (
    <ul className="list-wrapper">
      {items && filteredProducts(items, productsStatus).map(item => (
          <Product product={item} />
      ))}
    </ul>
  );
}

export default List;
