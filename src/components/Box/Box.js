import './Box.css';
export default function Box({ type = 'sm', classNames = '' }) {
  return <div className={`box box-${type} ${classNames}`}>Box</div>;
}
