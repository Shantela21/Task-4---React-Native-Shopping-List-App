export interface ShoppingItem {
  id: string;
  name: string;
  quantity: number;
  purchased: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ShoppingListState {
  items: ShoppingItem[];
  loading: boolean;
  error: string | null;
}

export interface AddItemPayload {
  name: string;
  quantity: number;
}

export interface UpdateItemPayload {
  id: string;
  name?: string;
  quantity?: number;
  purchased?: boolean;
}
