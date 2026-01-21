export const events = {
	 PERFORM_CREATE_ACCOUNT: {
		method: 'POST',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/register`,
	},
	 PERFORM_LOGIN_EMAIL_PASS: {
		method: 'POST',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/users/login`,
	},
    PERFORM_ADD_BUILTY: {
		method: 'POST',
		url: `${process.env.NEXT_PUBLIC_BASE_URL}/builty/create`,
	},
}