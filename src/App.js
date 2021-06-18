import React from 'react';
import PropTypes from 'prop-types';

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  // rating: PropTypes.number.isRequired,
  rating: PropTypes.number,
};

// function Food(props) {
//   const {fav} = props;
//   return <h3>I like {fav}</h3>;
// }

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} style={{height: '200px'}} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Apple',
    image:
      'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
    rating: 5,
  },
  {
    id: 2,
    name: 'Apple2',
    image:
      'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
    rating: 4,
  },
  {
    id: 3,
    name: 'Apple3',
    image:
      'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
    rating: 3,
  },
  {
    id: 4,
    name: 'Apple4',
    image:
      'https://i2.wp.com/ceklog.kindel.com/wp-content/uploads/2013/02/firefox_2018-07-10_07-50-11.png?fit=641%2C618&ssl=1',
    rating: 1,
  },
];

// function renderFood(dish, idx) {
//   return <Food key={`k_${idx}`} name={dish.name} picture={dish.image} />;
// }

// const renderFood = (dish, idx) => (
//   <Food key={`k_${idx}`} name={dish.name} picture={dish.image} />
// );

function App() {
  return (
    <div>
      {foodILike.map(({ id, name, image, rating }) => (
        <Food key={id} name={name} picture={image} rating={rating} />
      ))}
    </div>
  );
}

export default App;
