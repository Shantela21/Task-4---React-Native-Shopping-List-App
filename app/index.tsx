import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import AddItemForm from '../components/AddItemForm';
import EditItemModal from '../components/EditItemModal';
import ShoppingList from '../components/ShoppingList';
import { useToast } from '../hooks/useToast';
import { RootState } from '../store';
import { addItem, clearError, deleteItem, toggleItemPurchased, updateItem } from '../store/shoppingListSlice';
import { ShoppingItem } from '../types';

export default function Index() {
  const dispatch = useDispatch();
  const { error } = useSelector((state: RootState) => state.shoppingList);
  const [editingItem, setEditingItem] = useState<ShoppingItem | null>(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const { showSuccessToast } = useToast();

  const handleAddItem = (name: string, quantity: number) => {
    dispatch(addItem({ name, quantity }));
    showSuccessToast('Item added successfully!');
  };

  const handleTogglePurchased = (id: string) => {
    dispatch(toggleItemPurchased(id));
  };

  const handleEditItem = (item: ShoppingItem) => {
    setEditingItem(item);
    setIsEditModalVisible(true);
  };

  const handleUpdateItem = (id: string, name: string, quantity: number) => {
    dispatch(updateItem({ id, name, quantity }));
    showSuccessToast('Item updated successfully!');
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteItem(id));
    showSuccessToast('Item deleted successfully!');
  };

  const handleCloseEditModal = () => {
    setIsEditModalVisible(false);
    setEditingItem(null);
    dispatch(clearError());
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <AddItemForm 
        onAddItem={handleAddItem} 
        error={error}
      />
      
      <ShoppingList
        onTogglePurchased={handleTogglePurchased}
        onEditItem={handleEditItem}
        onDeleteItem={handleDeleteItem}
      />
      
      <EditItemModal
        visible={isEditModalVisible}
        item={editingItem}
        onClose={handleCloseEditModal}
        onUpdate={handleUpdateItem}
      />
      
      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
