import { Component } from 'react';
import shortid from 'shortid';
class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    licence: false,
  };
  nameInputId = shortid.generate();
  tagInputId = shortid.generate();
  handleFormChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  handleCheckboxChange = event => {
    this.setState({
      licence: event.currentTarget.checked,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: '', tag: '' });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>Имя</label>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleFormChange}
          id={this.nameInputId}
        />

        <label htmlFor={this.tagInputId}>Прозвище</label>
        <input
          type="text"
          name="tag"
          value={this.state.tag}
          onChange={this.handleFormChange}
          id={this.tagInputId}
        />
        <p>Ваш уровень:</p>
        <label>
          <input
            type="radio"
            name="experience"
            value="junior"
            checked={this.state.experience === 'junior'}
            onChange={this.handleFormChange}
          />
          junior
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="middle"
            checked={this.state.experience === 'middle'}
            onChange={this.handleFormChange}
          />
          middle
        </label>
        <label>
          <input
            type="radio"
            name="experience"
            value="senior"
            checked={this.state.experience === 'senior'}
            onChange={this.handleFormChange}
          />
          Senior
        </label>
        <label>
          <input
            type="checkbox"
            name="licence"
            checked={this.state.licence}
            onChange={this.handleCheckboxChange}
          />
          Согласен с условиямми
        </label>
        <button type="submit" disabled={!this.state.licence}>
          Отправить
        </button>
      </form>
    );
  }
}
export default Form;
