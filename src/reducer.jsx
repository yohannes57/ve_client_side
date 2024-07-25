export const initialValue = {
  user: "guest",
  data: [],
};
export default function reducer(state, action) {
  switch (state.type) {
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
