// components/Hello.tsx
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import {
  HelloActionTypes,
  onPressAdd,
  onPressSubtract
} from '../actions/helloActions';

interface HelloProps {
  name: string;
  enthusiasmLevel: number;
  onPressAdd: typeof onPressAdd;
  onPressSubtract: typeof onPressSubtract;
}

const Hello: React.SFC<HelloProps> = ({
  name,
  enthusiasmLevel,
  onPressAdd,
  onPressSubtract
}) => {
  const { root, buttons, button, greeting } = styles;

  const handleOnPressAdd = () => {
    onPressAdd(enthusiasmLevel);
  };

  const handleOnPressSubtract = () => {
    onPressSubtract(enthusiasmLevel);
  };

  const getExclamationMarks = (numChars: number) => {
    return Array(numChars + 1).join('!');
  };

  return (
    <View style={root}>
      <Text style={greeting}>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </Text>

      <View style={buttons}>
        <View style={button}>
          <Button
            title="-"
            onPress={handleOnPressSubtract}
            accessibilityLabel="decrement"
            color="red"
          />
        </View>

        <View style={button}>
          <Button
            title="+"
            onPress={handleOnPressAdd}
            accessibilityLabel="increment"
            color="blue"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});

export default Hello;
