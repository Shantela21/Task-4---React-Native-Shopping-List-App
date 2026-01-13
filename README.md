# React Native Shopping List App

A comprehensive shopping list application built with React Native and Redux for state management. This app allows users to add, edit, delete, and manage shopping items with persistent storage.

## Features

- ✅ **Add Items**: Add new shopping items with name and quantity
- ✅ **Edit Items**: Modify item name and quantity through a modal interface
- ✅ **Delete Items**: Remove items from the shopping list
- ✅ **Toggle Purchased**: Mark items as purchased/unpurchased with checkboxes
- ✅ **Persistent Storage**: Data persists between app sessions using Redux Persist
- ✅ **Error Handling**: Comprehensive error handling with toast notifications
- ✅ **Accessibility**: Screen reader support with proper accessibility labels
- ✅ **TypeScript**: Full TypeScript support for type safety
- ✅ **Component Architecture**: Separated, reusable components

## Technical Stack

- **React Native**: Mobile app framework
- **Expo**: Development platform and tooling
- **Redux Toolkit**: State management
- **Redux Persist**: Data persistence
- **TypeScript**: Type safety
- **React Native Toast Message**: User feedback notifications

## Project Structure

```
├── app/
│   ├── _layout.tsx          # Root layout with Redux Provider
│   └── index.tsx            # Main app screen
├── components/
│   ├── AddItemForm.tsx      # Form for adding new items
│   ├── EditItemModal.tsx    # Modal for editing items
│   ├── ShoppingItem.tsx     # Individual shopping item component
│   └── ShoppingList.tsx     # List of shopping items
├── store/
│   ├── index.ts             # Redux store configuration
│   └── shoppingListSlice.ts # Redux slice for shopping list state
├── hooks/
│   └── useToast.ts          # Custom hook for toast notifications
├── types/
│   └── index.ts             # TypeScript type definitions
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app (for testing on mobile device)

### Installation

1. Clone the repository
```bash
git clone https://github.com/Shantela21/Task-4---React-Native-Shopping-List-App.git
cd Task4-ReactNativeShoppingListApp
```

2. Install dependencies
```bash
npm install
```

### Running the App

1. Start the development server
```bash
npm start
# or
npx expo start
```

2. Choose your preferred platform:
   - **iOS Simulator**: Press `i` in the terminal
   - **Android Emulator**: Press `a` in the terminal
   - **Web Browser**: Press `w` in the terminal
   - **Expo Go**: Scan the QR code with the Expo Go app

## Usage Guide

### Adding Items

1. Enter an item name in the "Item name" field
2. Enter a quantity in the "Qty" field
3. Tap the "Add Item" button
4. Success toast will appear confirming the addition

### Editing Items

1. Tap the pencil icon next to any item
2. Modify the name or quantity in the modal
3. Tap the checkmark to save or X to cancel
4. Success toast will appear confirming the update

### Deleting Items

1. Tap the trash icon next to any item
2. Confirm deletion in the alert dialog
3. Success toast will appear confirming the deletion

### Marking Items as Purchased

1. Tap the checkbox next to any item
2. Item will be moved to the "Purchased" section
3. Visual feedback with strikethrough text

## State Management

The app uses Redux Toolkit for state management with the following structure:

### Shopping List State

```typescript
interface ShoppingListState {
  items: ShoppingItem[];
  loading: boolean;
  error: string | null;
}
```

### Available Actions

- `addItem`: Add a new shopping item
- `updateItem`: Update an existing item
- `deleteItem`: Remove an item
- `toggleItemPurchased`: Toggle purchased status
- `clearError`: Clear error state

### Data Persistence

- Shopping list data is automatically persisted using Redux Persist
- Data is stored in AsyncStorage on the device
- Items are restored when the app is reopened

## Component Architecture

### AddItemForm
- Handles user input for new items
- Validates input before submission
- Displays error messages

### ShoppingItem
- Renders individual shopping items
- Handles checkbox interactions
- Provides edit and delete actions

### EditItemModal
- Modal interface for editing items
- Pre-fills with existing item data
- Validates input before updates

### ShoppingList
- Manages the list of shopping items
- Separates purchased and unpurchased items
- Shows empty state when no items exist

## Accessibility Features

- **Screen Reader Support**: All interactive elements have proper accessibility labels
- **Semantic Roles**: Buttons, checkboxes, and inputs use appropriate roles
- **Keyboard Navigation**: Supports keyboard navigation on web
- **High Contrast**: Good color contrast for readability
- **Focus Management**: Proper focus handling in modals

## Error Handling

- **Input Validation**: Validates item names and quantities
- **Toast Notifications**: User-friendly error messages
- **Graceful Degradation**: App continues to function with errors
- **State Recovery**: Error state is automatically cleared

## Testing

The app includes comprehensive error handling and validation. To test the application:

1. **Add Items**: Test with valid and invalid inputs
2. **Edit Items**: Verify updates persist correctly
3. **Delete Items**: Confirm removal and toast notifications
4. **Persistence**: Close and reopen the app to verify data persistence
5. **Accessibility**: Test with screen reader enabled

## Development

### Adding New Features

1. Define TypeScript types in `types/index.ts`
2. Add Redux actions in `store/shoppingListSlice.ts`
3. Create or modify components in `components/`
4. Update main app screen in `app/index.tsx`

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Redux Toolkit for state management
- Separated, reusable components
- Comprehensive error handling

## Troubleshooting

### Common Issues

1. **Metro bundler issues**: Clear cache with `npx expo start -c`
2. **Dependency issues**: Run `npm install` to reinstall dependencies
3. **Build errors**: Check for TypeScript errors in the terminal
4. **Persistence issues**: Verify AsyncStorage permissions

### Getting Help

- Check the Expo documentation: https://docs.expo.dev/
- Redux Toolkit documentation: https://redux-toolkit.js.org/
- React Native documentation: https://reactnative.dev/

