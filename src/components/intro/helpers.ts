export const getAge = (birthday: string) => {
  const present = new Date(),
    birthDate = new Date(birthday);
  return new Date(new Date(present.getTime() - birthDate.getTime())).getUTCFullYear() - 1970;
};
