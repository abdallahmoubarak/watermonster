const regularExpression = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export const validSign = ({
  isLogin,
  email,
  password,
  fullName,
  repass,
}: {
  isLogin: boolean;
  email: string;
  password: string;
  fullName: string | null;
  repass: string | null;
}) => {
  let valid = true;
  let message = "All done";

  if (
    !(
      email?.includes("@") &&
      email?.indexOf("@") > 2 &&
      email?.length - email.indexOf("@") > 5
    )
  ) {
    valid = false;
    message = "Please enter a valid email address.";
    return { valid, message };
  }

  if (!regularExpression.test(password)) {
    valid = false;
    message =
      "Your password should be at least 8 characters with at least one uppercase, one lowercase, and one special character.";
    return { valid, message };
  }

  if (!isLogin) {
    if (!fullName || fullName?.length < 3 || fullName?.split(" ").length < 1) {
      valid = false;
      message = "Please put your full name.";
      return { valid, message };
    }
    if (repass !== password) {
      valid = false;
      message = "Make sure the password match.";
      return { valid, message };
    }
  }
  return { valid, message };
};
