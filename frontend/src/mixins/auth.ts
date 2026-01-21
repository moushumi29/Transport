"use client";
import { selectUserEmail, selectUserName, selectUserPass, setButtonLoading, setFormErrors, setUserEmail, setUserInfo, setUserName, setUserPass } from "@src/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { useRouter } from "next/navigation";
import axios from "axios";
import { events } from "@src/config/routes";
import TokenService from "@src/toast/token.service";
import { validateCreateAccount, validateLogin } from "@src/validation/authValidation";

type AuthField = 'email' | 'password' | 'username';

export const useAuthHandler = () => {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const useremail = useAppSelector(selectUserEmail);
    const userpass = useAppSelector(selectUserPass);
    const userName = useAppSelector(selectUserName);

    const changeFormData = (key: AuthField, value: string) => {
        if (key === 'email') dispatch(setUserEmail(value));
        if (key === 'password') dispatch(setUserPass(value));
        if (key === 'username') dispatch(setUserName(value));
    };

    const handleLogin = async (): Promise<void> => {
        const validation = validateLogin(useremail, userpass);
        if (!validation.isValid) {
            dispatch(setFormErrors(validation.error ?? "Something went wrong"));
            return;
        }
        try {
            dispatch(setButtonLoading(true));
            const { method, url } = events.PERFORM_LOGIN_EMAIL_PASS;

            const response = await axios({
                method,
                url,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    email: useremail,
                    password: userpass,
                },
            });

            console.log('response', response);
            const accessToken = response.data.token;
            dispatch(setUserInfo(response.data.user));
            // const refreshToken = response.data.data.refresh_token;
            TokenService.setUser({
                accessToken,
            });
            router.push('/dashboard');
            dispatch(setFormErrors(''));
            dispatch(setButtonLoading(false));
        } catch (error) {
            console.log('error', error);
            //dispatch(setFormErrors(t[error?.response?.data?.message_code]));
            // if (Array?.isArray(error?.response?.data?.details)) {
            // 	error?.response?.data?.details?.forEach((item) => {
            // 		Failure(`${t[item]}`);
            // 	});
            // } else {
            // 	Failure(t[error?.response?.data?.message_code]);
            // }
            dispatch(setButtonLoading(false));
        }
    };

    const splitName = (fullName: string) => {
  const parts = fullName.trim().split(/\s+/);

  return {
    firstName: parts[0] || "",
    lastName: parts.length > 1 ? parts.slice(1).join(" ") : "",
  };
};


    const handleCreateAccount = async (): Promise<void> => {
        const validation = validateCreateAccount(userName, useremail, userpass);
        if (!validation.isValid) {
            dispatch(setFormErrors(validation.error ?? "Something went wrong"));
            return;
        }
        try {
            dispatch(setButtonLoading(true));
            const { method, url } = events.PERFORM_CREATE_ACCOUNT;
            const { firstName, lastName } = splitName(userName);
            const response = await axios({
                method,
                url,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    fullName: {
                        firstName: firstName,
                        lastName: lastName
                    },
                    email: useremail,
                    password: userpass,
                },
            })
            console.log('response', response);
            const accessToken = response.data.token;
            dispatch(setUserInfo(response.data.user));
            // const refreshToken = response.data.data.refresh_token;
            TokenService.setUser({
                accessToken,
            });
            router.push('/dashboard');
            dispatch(setFormErrors(''));
            dispatch(setButtonLoading(false));
        } catch (error) {
            console.log('error', error);
        }
    }

    return {
        changeFormData,
        handleLogin,
        handleCreateAccount
    }
}