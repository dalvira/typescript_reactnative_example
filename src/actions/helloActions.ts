export const ON_PRESS_ADD = 'ON_PRESS_ADD';
export const ON_PRESS_SUBTRACT = 'ON_PRESS_SUBTRACT';

interface OnPressAddAction {
  type: typeof ON_PRESS_ADD;
  payload: { enthusiasmLevel: number };
}

interface OnPressSubtractAction {
  type: typeof ON_PRESS_SUBTRACT;
  payload: { enthusiasmLevel: number };
}

export type HelloActionTypes = OnPressAddAction | OnPressSubtractAction;

export function onPressAdd(enthusiasmLevel: number): HelloActionTypes {
  return {
    type: ON_PRESS_ADD,
    payload: { enthusiasmLevel: enthusiasmLevel + 1 }
  };
}

export function onPressSubtract(enthusiasmLevel: number): HelloActionTypes {
  return {
    type: ON_PRESS_SUBTRACT,
    payload: {
      enthusiasmLevel:
        enthusiasmLevel < 1 ? enthusiasmLevel : enthusiasmLevel - 1
    }
  };
}
