import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ShoppingItem as ShoppingItemType } from '../types';

interface ShoppingItemProps {
  item: ShoppingItemType;
  onTogglePurchased: (id: string) => void;
  onEdit: (item: ShoppingItemType) => void;
  onDelete: (id: string) => void;
}

const ShoppingItem: React.FC<ShoppingItemProps> = ({
  item,
  onTogglePurchased,
  onEdit,
  onDelete,
}) => {
  return (
    <View style={[styles.container, item.purchased && styles.purchasedContainer]}>
      <TouchableOpacity
        style={styles.checkboxContainer}
        onPress={() => onTogglePurchased(item.id)}
        accessibilityRole="checkbox"
        accessibilityLabel={`Mark ${item.name} as ${item.purchased ? 'unpurchased' : 'purchased'}`}
        accessibilityState={{ checked: item.purchased }}
      >
        <Ionicons
          name={item.purchased ? 'checkbox' : 'square-outline'}
          size={24}
          color={item.purchased ? '#4CAF50' : '#666'}
        />
      </TouchableOpacity>
      
      <View style={styles.itemInfo}>
        <Text style={[styles.itemName, item.purchased && styles.purchasedText]}>
          {item.name}
        </Text>
        <Text style={[styles.itemQuantity, item.purchased && styles.purchasedText]}>
          Quantity: {item.quantity}
        </Text>
      </View>
      
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => onEdit(item)}
          accessibilityRole="button"
          accessibilityLabel={`Edit ${item.name}`}
        >
          <Ionicons name="pencil" size={20} color="#2196F3" />
        </TouchableOpacity>
        
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => onDelete(item.id)}
          accessibilityRole="button"
          accessibilityLabel={`Delete ${item.name}`}
        >
          <Ionicons name="trash" size={20} color="#F44336" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  purchasedContainer: {
    backgroundColor: '#f5f5f5',
  },
  checkboxContainer: {
    marginRight: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 14,
    color: '#666',
  },
  purchasedText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  editButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#E3F2FD',
  },
  deleteButton: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#FFEBEE',
  },
});

export default ShoppingItem;
