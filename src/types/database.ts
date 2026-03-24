// Database types — will be auto-generated from Supabase schema in Phase 1B
// For now, define the core types manually to unblock development

export type Product = {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  description: string;
  category: "air-dried-treats" | "soft-chews" | "dog-food";
  price_100g: number; // in pence
  price_200g: number; // in pence
  image_url: string;
  in_stock: boolean;
  subscription_eligible: boolean;
};

export type Profile = {
  id: string;
  created_at: string;
  full_name: string | null;
  email: string | null;
  phone: string | null;
  address_line1: string | null;
  address_line2: string | null;
  city: string | null;
  postcode: string | null;
  country: string;
  stripe_customer_id: string | null;
};

export type CartItem = {
  id: string;
  created_at: string;
  user_id: string;
  product_id: string;
  weight: "100g" | "200g";
  quantity: number;
  is_subscription: boolean;
  subscription_frequency: "2w" | "4w" | "6w" | "8w" | null;
  product?: Product; // joined
};

export type SavedItem = {
  id: string;
  created_at: string;
  user_id: string;
  product_id: string;
  weight: "100g" | "200g";
  product?: Product; // joined
};

export type OrderStatus =
  | "pending_payment"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered";

export type Order = {
  id: string;
  created_at: string;
  user_id: string;
  status: OrderStatus;
  total_pence: number;
  stripe_session_id: string;
  stripe_payment_intent_id: string | null;
  shipping_address: {
    full_name: string;
    address_line1: string;
    address_line2: string | null;
    city: string;
    postcode: string;
    country: string;
  };
  items?: OrderItem[]; // joined
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  product_name: string;
  weight: "100g" | "200g";
  quantity: number;
  unit_price_pence: number;
  is_subscription: boolean;
};

export type SubscriptionStatus = "active" | "paused" | "cancelled";

export type Subscription = {
  id: string;
  created_at: string;
  user_id: string;
  product_id: string;
  weight: "100g" | "200g";
  frequency: "2w" | "4w" | "6w" | "8w";
  status: SubscriptionStatus;
  stripe_subscription_id: string;
  next_delivery_date: string;
  product?: Product; // joined
};
