import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { ShoppingItem as ShoppingItemType } from '../types';
import ShoppingItem from './ShoppingItem';

interface ShoppingListProps {
  onTogglePurchased: (id: string) => void;
  onEditItem: (item: ShoppingItemType) => void;
  onDeleteItem: (id: string) => void;
}

const ShoppingList: React.FC<ShoppingListProps> = ({
  onTogglePurchased,
  onEditItem,
  onDeleteItem,
}) => {
  const { items } = useSelector((state: RootState) => state.shoppingList);

  const purchasedItems = items.filter(item => item.purchased);
  const unpurchasedItems = items.filter(item => !item.purchased);

  const renderShoppingItem = ({ item }: { item: ShoppingItemType }) => (
    <ShoppingItem
      item={item}
      onTogglePurchased={onTogglePurchased}
      onEdit={onEditItem}
      onDelete={onDeleteItem}
    />
  );

  const renderSectionHeader = (title: string, count: number) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <Text style={styles.sectionCount}>{count} item{count !== 1 ? 's' : ''}</Text>
    </View>
  );

  const renderUnpurchasedSection = () => {
    if (unpurchasedItems.length === 0) return null;
    
    return (
      <View>
        {renderSectionHeader('To Buy', unpurchasedItems.length)}
        <FlatList
          data={unpurchasedItems}
          renderItem={renderShoppingItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    );
  };

  const renderPurchasedSection = () => {
    if (purchasedItems.length === 0) return null;
    
    return (
      <View>
        {renderSectionHeader('Purchased', purchasedItems.length)}
        <FlatList
          data={purchasedItems}
          renderItem={renderShoppingItem}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
        />
      </View>
    );
  };

  if (items.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Your shopping list is empty</Text>
        <Text style={styles.emptySubtext}>Add items to get started!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {renderUnpurchasedSection()}
      {renderPurchasedSection()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  sectionCount: {
    fontSize: 14,
    color: '#666',
    backgroundColor: '#e9ecef',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#999',
  },
});

export default ShoppingList;
