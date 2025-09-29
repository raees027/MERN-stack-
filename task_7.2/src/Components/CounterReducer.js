export const Actions = {
  Increament: "Increament",
  Decrement: "Decreament",
  Reset: "Reset",
  Increment_by: "Increment_by",
  Decrement_by: "Decrement_by",
};

export const counterReducer = (state, action) => {
  switch (action.type) {
    case Actions.Increament:
      return { count: state.count + 1 };
    case Actions.Decrement:
      return { count: state.count - 1 };
    case Actions.Reset:
      return { count: 0 };
    case Actions.Increment_by:
      return { count: state.count + action.payload };
    case Actions.Decrement_by:
      return { count: state.count - action.payload.count };

    default:
      return state;
  }
};
