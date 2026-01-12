import { useEffect } from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { clearError } from '../store/shoppingListSlice';

export const useToast = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.shoppingList);

  useEffect(() => {
    if (error) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: error,
        position: 'bottom',
      });
      
      // Clear error after showing toast
      setTimeout(() => {
        dispatch(clearError());
      }, 100);
    }
  }, [error, dispatch]);

  const showSuccessToast = (message: string) => {
    Toast.show({
      type: 'success',
      text1: 'Success',
      text2: message,
      position: 'bottom',
    });
  };

  const showErrorToast = (message: string) => {
    Toast.show({
      type: 'error',
      text1: 'Error',
      text2: message,
      position: 'bottom',
    });
  };

  const showInfoToast = (message: string) => {
    Toast.show({
      type: 'info',
      text1: 'Info',
      text2: message,
      position: 'bottom',
    });
  };

  return {
    showSuccessToast,
    showErrorToast,
    showInfoToast,
  };
};
