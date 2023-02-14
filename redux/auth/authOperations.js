import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
export const authSignUp =
  ({ email, password, login }) =>
  async (dispatch, getState) => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

export const authSignIn =
  ({ email, password }) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };
export const authLogOut = () => async (dispatch, getState) => {};
// export const authSignUp = async () => {
//   try {
//     await auth.createUserWithEmailAndPassword("emai", "password");
//   } catch (error) {
//     throw error;
//   }
// };
