import { signInWithGoogle } from '../../firebase/providers';
import { checkingCredentials, login, logout } from './authSlice';

export const checkingAuth = () => {
    return async (dispatch) => {

        dispatch( checkingCredentials() )

    }
}

export const startGoogleLogin = () => {
    return async (dispatch) => {

        dispatch( checkingCredentials() )  //Estado de "auth" en redux

        const result = await signInWithGoogle(); //Función de firebase
        if(!result.ok) return dispatch( logout( result.errorMessage ) );

        dispatch( login( result ) );
    }
}