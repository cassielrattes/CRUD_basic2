export default function validator(data, info) {
  const errors = [];
  if (info.required) {
    if (!data || data.trim() === "") {
      return false;
    }
  }
  if (info.regex) {
    if (!data.match(info.regex)) {
      errors.push("regex does not match");
    }
    return errors;
  }
  return true;
}
