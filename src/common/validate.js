export const validateFormData = (email, password) => {
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+.]).{6,20}$/.test(
      password
    );

  if (!isEmailValid) return "Entered Email is not valid";
  if (!isPasswordValid) return "Entered Password is not valid";
  return null;
};
