import PropTypes from 'prop-types';
import './ListingCard.css';

const ListingCard = ({ listing }) => (
  <div className="listing-card">
    <img src={listing.image} alt={listing.title} />
    <h3>{listing.title}</h3>
    <p>{listing.type}</p>
    <p>
      {listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms
    </p>
    <p>${listing.price} / night</p>
    <p>Rating: {listing.rating}</p>
  </div>
);

ListingCard.propTypes = {
  listing: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
    bedrooms: PropTypes.number.isRequired,
    bathrooms: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default ListingCard;
