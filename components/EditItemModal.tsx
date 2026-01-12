import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { ShoppingItem } from '../types';

interface EditItemModalProps {
  visible: boolean;
  item: ShoppingItem | null;
  onClose: () => void;
  onUpdate: (id: string, name: string, quantity: number) => void;
}

const EditItemModal: React.FC<EditItemModalProps> = ({
  visible,
  item,
  onClose,
  onUpdate,
}) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('1');

  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity.toString());
    } else {
      setName('');
      setQuantity('1');
    }
  }, [item]);

  const handleUpdate = () => {
    if (!item) return;

    const parsedQuantity = parseInt(quantity, 10);
    
    if (!name.trim()) {
      Alert.alert('Error', 'Please enter an item name');
      return;
    }
    
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      Alert.alert('Error', 'Please enter a valid quantity');
      return;
    }
    
    onUpdate(item.id, name.trim(), parsedQuantity);
    onClose();
  };

  const handleClose = () => {
    setName('');
    setQuantity('1');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color="#666" />
          </TouchableOpacity>
          <Text style={styles.title}>Edit Item</Text>
          <TouchableOpacity onPress={handleUpdate} style={styles.saveButton}>
            <Ionicons name="checkmark" size={24} color="#4CAF50" />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <Text style={styles.label}>Item Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter item name"
            accessibilityLabel="Item name"
          />

          <Text style={styles.label}>Quantity</Text>
          <TextInput
            style={styles.input}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
            placeholder="Enter quantity"
            accessibilityLabel="Quantity"
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  closeButton: {
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  saveButton: {
    padding: 8,
  },
  form: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
    marginTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 12,
    fontSize: 16,
  },
});

export default EditItemModal;
