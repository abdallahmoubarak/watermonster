export default function validEmail(email: string) {
  if (
    !(
      email?.includes("@") &&
      email?.indexOf("@") > 2 &&
      email?.length - email.indexOf("@") > 5
    )
  ) {
    return false;
  }
  return true;
}
