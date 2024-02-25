import React from 'react';
import { Link } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza = () => {
  const [pizza, setPizza] = React.useState();
  const params = useParams();
  console.log(params);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        await fetch('https://64211ecc86992901b2abef99.mockapi.io/PizzaTittle/' + id)
          .then((res) => {
            return res.json();
          })
          .then((arr) => {
            setPizza(arr);
          });
      } catch (error) {
        alert('Ошибка при получении пиццы!');
        navigate('/');
      }
    }

    fetchPizza();
  }, [id, navigate]);
  console.log(pizza, 'pisssa');

  if (!pizza) {
    return <>Загрузка...</>;
  }
  
  return (
    <>
      {' '}
      <div className="container">
       <div className='cont2'>
       <img src={pizza.imageUrl} alt='pho' />
        <h2>{pizza.title}</h2>
        <h4>{pizza.price} sm</h4>
       </div>
        <Link to="/">
          <button className="button button--outline button--add">
            <span>Назад</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default FullPizza;
