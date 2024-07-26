export const initialValue = {
  user: "Guest",
  data: [],
};
export default function reducer(state, action) {
  switch (action.type) {
    case "set_user":
      return {
        ...state,
        user: action.user,
      };
    case "user":
      return "";
    default:
      return "nothing done here";
  }
}
