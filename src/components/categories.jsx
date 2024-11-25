import  { useState } from 'react';

const Categories = () => {
    const categories = ['Beachfront', 'Cabins', 'Trending', 'City', 'Countryside'];
    const [activeCategory, setActiveCategory] = useState('');
    return (
      <div className="categories">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? 'active' : ''}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  };
  export default Categories;
  