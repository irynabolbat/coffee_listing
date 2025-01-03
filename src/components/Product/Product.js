import "./Product.scss";
import StarFill from "../../assets/svg/Star_fill.svg";
import Star from "../../assets/svg/Star.svg";

function Product({ product: item }) {
  return (
    <li className="product">
      {item.popular && <p className="product-popular">Popular</p>}
      <img src={item.image} className="product-image" />

      <div className="product-info">
        <h2 className="product-name">{item.name}</h2>
        <p className="product-price">{item.price}</p>
      </div>
      <div className="product-rating-wrapper">
        {item.rating ? (
          <div className="product-rating-content">
            <img src={StarFill} className="product-star" />
            <p className="product-info-text">{item.rating}</p>
            <p className="product-info-text product-votes">
              ({item.votes} votes)
            </p>
          </div>
        ) : (
          <div className="product-rating-content">
            <img src={Star} className="product-star" />
            <p className="product-rating-text">No ratings</p>
          </div>
        )}

        {!item.available && <p className="product-not-available">Sold out</p>}
      </div>
    </li>
  );
}

export default Product;
