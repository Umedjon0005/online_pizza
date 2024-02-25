import React from 'react';
import qs from 'qs';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/skeleton';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setByCategoryId } from '../redux/slices/filterSlice';

export const Home = () => {
  const ByCategory = useSelector((state) => state.filterSlice.categoryId);
  const sortType = useSelector((state) => state.filterSlice.sort.sortProperty);

  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const category = ByCategory > 0 ? `category=${ByCategory}` : '';

  const onChangeCategory = (id) => {
    dispatch(setByCategoryId(id));
  };

  try {
    React.useEffect(() => {
      fetch(
        `https://64211ecc86992901b2abef99.mockapi.io/PizzaTittle?&limit=4&${category}&sortBy=${sortType}`,
      )
        .then((res) => {
          return res.json();
        })
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
    }, [category, sortType]);
  } catch (error) {
    console.log('error parsing items');
  }
  React.useEffect(() => {
    const querrString = qs.stringify({
      ByCategory,
      sortType,
    });
    navigate(`?${querrString}`);
  }, [ByCategory, navigate, sortType]);

  const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  const pizzas = items.map((ob2, id) => (
    <PizzaBlock key={id}  {...ob2} />
   
  ));
  return (
    <>
      <div className="content__top">
        <Categories value={ByCategory} onChangeCategory={onChangeCategory} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
    </>
  );
};
export default Home;
