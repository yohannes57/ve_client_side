export const initialValue = {
  user: "Guest",
  data: [],
  styles: {
    bgColor: null,
    fontStyle: null,
    textColor: null,
  },
};
export default function reducer(state, action) {
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        user: action.user,
      };
    case "set_data":
      return {
        ...state,
        data: action.data,
      };
    case "set_settings":
      return {
        ...state,
        styles: action.styles,
      };
    default:
      return "nothing done here";
  }
}
