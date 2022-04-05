import './Statistic.css';
import PropTypes from 'prop-types';
const colorBg = [
  '#F44336',
  '#4CAF50',
  '#2196F3',
  '#607D8B',
  '#E91E63',
  '#3F5185',
];

export default function Statistic({ title, stats }) {
  function getRandom(arr) {
    var shuffled = arr.slice(0),
      i = arr.length,
      min = i - 4,
      temp,
      index;
    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }
  let color = getRandom(colorBg);

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {getRandom(stats).map((item, index) => (
          <li
            key={item.id}
            className="item"
            style={{
              backgroundColor: color[index],
            }}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
