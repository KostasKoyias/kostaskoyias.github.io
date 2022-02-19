export const getAge = (birthday) => {
	const present = new Date(), birthDate = new Date(birthday)
	return new Date(new Date(present.getTime() - birthDate.getTime())).getUTCFullYear() - 1970
}