import { AsyncStorage } from 'react-native';
import CreateDataContext from './createDataContext';
import trackterApi from '../api/tracker';
import { navigate } from '../navigationRef';


const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { errorMessage: null, token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackterApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'something wron with sign up' });
  }
};
const signin = (dispatch) => {
  return;
  ({ email, password }) => {

  };
};

const signout = (dispatch) => () => {};

export const { Provider, Context } = CreateDataContext(authReducer, {}, { token: null, errorMessage: null });
