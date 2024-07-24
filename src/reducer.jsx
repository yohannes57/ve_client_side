export const initialValue = {
  user: "guest",
  data: [],
};
export default function reducer(state, action) {
  switch (state.type) {
    case "":
      return "";
    case "user":
      return "";
    default:
      return "nothing done here";
  }
}
