import {
  HelloActionTypes,
  ON_PRESS_ADD,
  ON_PRESS_SUBTRACT
} from '../actions/helloActions';

export interface HelloState {
  name: string;
  enthusiasmLevel: number;
}

const initialState = {
  name: 'Alex',
  enthusiasmLevel: 1
};

export default function(
  state = initialState,
  action: HelloActionTypes
): HelloState {
  switch (action.type) {
    case ON_PRESS_ADD: {
      return {
        ...state,
        enthusiasmLevel: action.payload.enthusiasmLevel
      };
    }
    case ON_PRESS_SUBTRACT: {
      return {
        ...state,
        enthusiasmLevel: action.payload.enthusiasmLevel
      };
    }
    default:
      return state;
  }
}
