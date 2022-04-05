import s from './Alert.module.css';
import PropTypes from 'prop-types';
export default function Alert({ text, type }) {
  // const typeClass = type ? `Alert--${type}` : '';
  return (
    // <p role="alert" className={`Alert ${typeClass}`.trim()}>
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}
Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['error', 'warning', 'success']).isRequired,
};
