// components/Hello.tsx
import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../reducers';
import {
  HelloActionTypes,
  onPressAdd,
  onPressSubtract
} from '../actions/helloActions';

import Hello from '../components/Hello';

export interface HelloProps {
  name: string;
  enthusiasmLevel: number;
  onPressAdd: typeof onPressAdd;
  onPressSubtract: typeof onPressSubtract;
}

class HelloContainer extends React.Component<HelloProps> {
  constructor(props: HelloProps) {
    super(props);
  }

  render() {
    return (
      <Hello
        name={this.props.name}
        enthusiasmLevel={this.props.enthusiasmLevel}
        onPressAdd={this.props.onPressAdd}
        onPressSubtract={this.props.onPressSubtract}
      />
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  name: state.helloReducer.name,
  enthusiasmLevel: state.helloReducer.enthusiasmLevel
});

export default connect(
  mapStateToProps,
  { onPressAdd, onPressSubtract }
)(HelloContainer);
