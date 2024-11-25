import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories'; // Ensure proper capitalization
import ListingCard from './components/ListingCard';
import Footer from './components/footer';
import './App.css'; // Global CSS import

const App = () => {
  const mockListings = [
    {
      image: 'https://th.bing.com/th/id/OIP.8KA2QfAOfjQB4eWsgMkVswAAAA?rs=1&pid=ImgDetMain',
      title: 'Cozy Cabin',
      type: 'Cabin',
      guests: 4,
      bedrooms: 2,
      bathrooms: 1,
      price: 120,
      rating: 4.5,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.2M7Nnz7ccb3mfzLfnzEIGwHaE8?rs=1&pid=ImgDetMain',
      title: 'Beachfront Paradise',
      type: 'Entire Home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 250,
      rating: 4.8,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.8KA2QfAOfjQB4eWsgMkVswAAAA?rs=1&pid=ImgDetMain',
      title: 'Beachfront Paradise',
      type: 'Entire Home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 250,
      rating: 4.8,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.2M7Nnz7ccb3mfzLfnzEIGwHaE8?rs=1&pid=ImgDetMain',
      title: 'Beachfront Paradise',
      type: 'Entire Home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 250,
      rating: 4.8,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.8KA2QfAOfjQB4eWsgMkVswAAAA?rs=1&pid=ImgDetMain',
      title: 'Beachfront Paradise',
      type: 'Entire Home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 250,
      rating: 4.8,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.2M7Nnz7ccb3mfzLfnzEIGwHaE8?rs=1&pid=ImgDetMain',
      title: 'Beachfront Paradise',
      type: 'Entire Home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 250,
      rating: 4.8,
    },
    {
      image: 'https://th.bing.com/th/id/OIP.8KA2QfAOfjQB4eWsgMkVswAAAA?rs=1&pid=ImgDetMain',
      title: 'Beachfront Paradise',
      type: 'Entire Home',
      guests: 6,
      bedrooms: 3,
      bathrooms: 2,
      price: 250,
      rating: 4.8,
    },
  ];

  return (
    <div className="app"> {/* Use class names as strings */}
      <Navbar />
      <SearchBar />
      <Categories />
      <div className="listings"> {/* Use class names as strings */}
        {mockListings.map((listing, index) => (
          <ListingCard key={index} listing={listing} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
