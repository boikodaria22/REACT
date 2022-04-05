import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
  state = {
    visible: false,
  };
  toggle = () => {
    this.setState(prevState => {
      return {
        visible: !prevState.visible,
      };
    });
  };
  render() {
    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={this.toggle}
        >
          {this.state.visible ? 'Cкрыть' : 'Показать'}
        </button>

        {this.state.visible && (
          <div className="Dropdown__menu">Выпадающее меню</div>
        )}
      </div>
    );
  }
}

export default Dropdown;
