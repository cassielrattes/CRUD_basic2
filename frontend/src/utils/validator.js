export default function validator(data, info) {
  if (info.required) {
    if (!data || data.trim() === "") {
      return false;
    }
  }
  if (info.regex) {
    return data.match(info.regex);
  }
  return true;
}
