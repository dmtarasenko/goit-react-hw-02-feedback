import { Component } from 'react';
import {
  SectionTitle,
  SectionContainer,
} from 'components/Section/Section.styled';

export class Section extends Component {
  render() {
    return (
      <SectionContainer>
        <SectionTitle>{this.props.title}</SectionTitle>
        {this.props.children}
      </SectionContainer>
    );
  }
}
