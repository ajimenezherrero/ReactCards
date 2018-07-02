import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import Wrapper from './Wrapper';

class CardsForm extends PureComponent {
  state = {
    title: '',
    description: '',
    image: ''
  }

  handleChange = event => {
    const changes = {};

    changes[event.target.name] = event.target.value;

    this.setState(changes);

  }

  handleSubmit = event => {
    const { onSubmit } = this.props;

    event.preventDefault();
    onSubmit(this.state);
  }

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </label>
          <label>
            Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
          </label>
          <label>
            Image(url):
            <input type="text" name="image" value={this.state.image} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </Form>
      </Wrapper>
    );
  }
};

CardsForm.propTypes = {};

export default CardsForm;
