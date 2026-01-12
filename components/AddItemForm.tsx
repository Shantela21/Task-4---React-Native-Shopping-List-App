import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

interface AddItemFormProps {
  onAddItem: (name: string, quantity: number) => void;
  error: string | null;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ onAddItem, error }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('1');

  const handleAddItem = () => {
    const parsedQuantity = parseInt(quantity, 10);
    
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter an item name');
      return;
    }
    
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Error', 'Please enter a valid quantity');
      return;
    }
    
    onAddItem(name.trim(), parsedQuantity);
    setName('');
    setQuantity('1');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.nameInput}
          placeholder="Item name"
          value={name}
          onChangeText={setName}
          accessibilityLabel="Item name"
        />
        
        <TextInput
          style={styles.quantityInput}
          placeholder="Qty"
          value={quantity}
          onChangeText={setQuantity}
          keyboardType="numeric"
          accessibilityLabel="Quantity"
        />
      </View>
      
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddItem}
        accessibilityRole="button"
        accessibilityLabel="Add item to shopping list"
      >
        <Ionicons name="add-circle" size={24} color="#fff" />
        <Text style={styles.addButtonText}>Add Item</Text>
      </TouchableOpacity>
      
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  nameInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    marginRight: 8,
    fontSize: 16,
  },
  quantityInput: {
    width: 80,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 4,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  errorText: {
    color: '#F44336',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default AddItemForm;
