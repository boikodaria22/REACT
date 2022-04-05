//lesson 1
import PropTypes from 'prop-types';
import defaultImage from './defaultImage.jpg';
import s from './Painting.module.css';
//деструктуризация  props imageUel c деволтной картинкое если не пришел ответ с сервера
export default function Painting({
  imageUrl = defaultImage,
  title,
  author,
  authorUrl,
  price,
  quantity,
}) {
  return (
    <div className={s.container}>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      {/*если imageUrl не получен отобразится defaultImage, оператор "??" если занчение слева не прводися к true, отобразится значение справа от орепатора*/}
      <h2>{title}</h2>
      <p>
        Автор: <a href={authorUrl}>{author}</a>
      </p>
      <p> Цена:{price}кредитов</p>
      <p> Доступность:{quantity < 15 ? 'заканчивается' : 'есть в наличии'}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
//проверка типа переданых props  на тип , - не пустые значения через библиотеку prop-types
