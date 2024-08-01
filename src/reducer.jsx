export const initialValue = {
  user: "Dashboard",
  data: [],
  styles: {
    fontStyle: "Arial",
    bgColor: "white",
    textColor: "black",
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
