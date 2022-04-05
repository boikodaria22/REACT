//lesson 1
import Painting from "./Painting"
import PropTypes from "prop-types"

export default function PaintingList({ items }){
  return(
  <ul>
    {/*перебираем json обьект из props для рендаринга каждого обекта по шаблону Painting */}
   {items.map( item =>
   <li key={ item.id }>
    <Painting
          imageUrl={ item.url }
          title={ item.title }
          author={ item.author.tag }
          authorUrl={ item.author.url }
          price={ item.price }
          quantity={ item.quantity }
        />
   </li>)}
  </ul>);
}
PaintingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};
//проверка типа переданого props json обекта на тип массив с обьектами,где id из json - не пустая строка  через библиотеку prop-types