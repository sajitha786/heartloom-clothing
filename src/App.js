import React from 'react';
import './categories.styles.scss';
const App = () =>   {

  const categories =[
    {
      "id": 1,
      "title": "Hats",
      "imageUrl": "https://i.pinimg.com/564x/8f/c7/17/8fc7174cb8d2f7a5b64881d756ef1b73.jpg"
    },
    {
      "id": 2,
      "title": "Jackets",
      "imageUrl": 'https://i.pinimg.com/originals/44/e1/b7/44e1b75f4f351c9be5bad415152133ef.jpg'
      //"imageUrl": "https://i.pinimg.com/564x/b9/aa/c0/b9aac006153bdb2c46c5e0e78ec1b257.jpg"
    },
    {
      "id": 3,
      "title": "Sneakers",
      "imageUrl": "https://i.pinimg.com/564x/b5/d8/d8/b5d8d80cd79cbff294049e207c634102.jpg"
    },
    {
      "id": 4,
      "title": "Womens",
      "imageUrl": "https://i.pinimg.com/originals/05/a7/43/05a743d4cc4b9729f149cb84e24f6e38.jpg"
    },
    {
      "id": 5,
      "title": "Mens",
      "imageUrl": 'https://i.pinimg.com/originals/e5/c3/30/e5c330d45ec52c4cc7952824812ba21f.jpg',
      //"imageUrl": 'https://i.pinimg.com/564x/9f/fa/73/9ffa73427d5e26fe2b5f9e405b01302f.jpg'
    }
  ]
  

  return (
    <div className = "categories-containers">
    {
      categories.map(({title,id,imageUrl}) => {
        return(
        <div key={id} className="category-container">
          <div className='background-image' style={{
            backgroundImage: `url(${imageUrl})`
          }} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
        )
      })
    }    
    </div>
  );
}

export default App;
