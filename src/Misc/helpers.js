export const getInitials = name => {
	const firstNameInitial = name.split(" ")[0][0];
	const lastNameInitial = name.split(" ")[1][0];
	return firstNameInitial + lastNameInitial;
};

export const checkPhone = async phone =>
	await (phone.match(/\d{3} \d{3}-\d{2}-\d{2}/gm) ? true : false);

export const getfirstAndLast = fullName => {
	return [fullName.split(" ")[0], fullName.split(" ")[1]];
};
