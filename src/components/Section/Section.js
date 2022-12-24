import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  SectionTitle,
  SectionContainer,
} from 'components/Section/Section.styled';

export class Section extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <SectionContainer>
        <SectionTitle>{title}</SectionTitle>
        {children}
      </SectionContainer>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
