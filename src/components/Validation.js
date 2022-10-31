export const validateEmail = ({ email, setEmailError }) => {
  const emailRegEx =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return email && !email.match(emailRegEx)
    ? setEmailError("Email is not valid")
    : setEmailError("");
};

export const validatePhone = ({ phone, setPhoneError }) => {
  const phoneRegEx =
    /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;
  return phone && !phone.match(phoneRegEx)
    ? setPhoneError("Phone Number is not valid")
    : setPhoneError("");
};
