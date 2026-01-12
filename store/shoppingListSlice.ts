import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddItemPayload, ShoppingItem, ShoppingListState, UpdateItemPayload } from '../types';

const initialState: ShoppingListState = {
  items: [],
  loading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      const newItem: ShoppingItem = {
        id: Date.now().toString(),
        name: action.payload.name.trim(),
        quantity: action.payload.quantity,
        purchased: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      if (newItem.name === '') {
        state.error = 'Item name cannot be empty';
        return;
      }
      
      if (newItem.quantity <= 0) {
        state.error = 'Quantity must be greater than 0';
        return;
      }
      
      state.items.push(newItem);
      state.error = null;
    },
    
    updateItem: (state, action: PayloadAction<UpdateItemPayload>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (itemIndex === -1) {
        state.error = 'Item not found';
        return;
      }
      
      const item = state.items[itemIndex];
      
      if (action.payload.name !== undefined) {
        const trimmedName = action.payload.name.trim();
        if (trimmedName === '') {
          state.error = 'Item name cannot be empty';
          return;
        }
        item.name = trimmedName;
      }
      
      if (action.payload.quantity !== undefined) {
        if (action.payload.quantity <= 0) {
          state.error = 'Quantity must be greater than 0';
          return;
        }
        item.quantity = action.payload.quantity;
      }
      
      if (action.payload.purchased !== undefined) {
        item.purchased = action.payload.purchased;
      }
      
      item.updatedAt = new Date();
      state.error = null;
    },
    
    deleteItem: (state, action: PayloadAction<string>) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload);
      
      if (itemIndex === -1) {
        state.error = 'Item not found';
        return;
      }
      
      state.items.splice(itemIndex, 1);
      state.error = null;
    },
    
    toggleItemPurchased: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      
      if (!item) {
        state.error = 'Item not found';
        return;
      }
      
      item.purchased = !item.purchased;
      item.updatedAt = new Date();
      state.error = null;
    },
    
    clearError: (state) => {
      state.error = null;
    },
    
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const {
  addItem,
  updateItem,
  deleteItem,
  toggleItemPurchased,
  clearError,
  setLoading,
} = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
