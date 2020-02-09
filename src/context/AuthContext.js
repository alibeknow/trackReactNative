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
    case 'signin':
      return { errorMessage: null, token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'signout':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList');
  } else {
    navigate('SignUp');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackterApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'something wron with sign up' });
  }
};
const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackterApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
    navigate('TrackList');
  } catch (error) {
    dispatch({ type: 'add_error', payload: 'something wrong!!!' });
  }
};

const signout = (dispatch) => async () => {
  dispatch({ type: 'signout' });
  await AsyncStorage.removeItem('token');
  navigate('loginFlow');
  console.log('logiout');
};

export const { Provider, Context } = CreateDataContext(authReducer,
  {
    signin, signup, signout, clearErrorMessage, tryLocalSignIn,
  }, { token: null, errorMessage: null });
