// Database types — aligned with Supabase schema (zfaebixcwxpsausybwps)
// Last synced: 2026-03-24

// ─── Enums ───────────────────────────────────────────────

export type AdminRole = "super_admin" | "manager" | "staff";

export type DiscountType = "percent" | "flat";

export type GdprAction =
  | "consent_given"
  | "consent_withdrawn"
  | "data_access_request"
  | "deletion_request"
  | "deletion_completed"
  | "marketing_opt_in"
  | "marketing_opt_out";

export type NotificationChannel = "email" | "sms" | "push";

export type NotificationStatus = "pending" | "sent" | "failed";

export type OrderStatus =
  | "pending"
  | "paid"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "refunded";

export type PaymentProvider = "stripe" | "paypal" | "klarna";

export type PaymentStatus = "pending" | "success" | "failed" | "refunded";

export type RefundReason =
  | "damaged"
  | "wrong_item"
  | "not_arrived"
  | "customer_changed_mind"
  | "other";

export type StockMovementType =
  | "stock_in"
  | "sale"
  | "damaged"
  | "adjustment"
  | "return";

export type UserRole = "customer" | "admin";

// ─── Tables ──────────────────────────────────────────────

export type Address = {
  id: string;
  user_id: string;
  line1: string;
  line2: string | null;
  city: string;
  postcode: string;
  country_code: string;
  is_default: boolean;
  created_at: string;
};

export type AdminUser = {
  id: string;
  email: string;
  full_name: string;
  role: AdminRole;
  permissions: string[];
  two_fa_enabled: boolean;
  last_login_at: string | null;
  last_login_ip: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type AuditLog = {
  id: string;
  admin_id: string | null;
  action: string;
  table_name: string;
  record_id: string | null;
  old_value: Record<string, unknown> | null;
  new_value: Record<string, unknown> | null;
  ip_address: string | null;
  user_agent: string | null;
  created_at: string;
};

export type Category = {
  id: string;
  parent_id: string | null;
  name: string;
  slug: string;
  icon: string | null;
  display_order: number;
  is_active: boolean;
  created_at: string;
};

export type Discount = {
  id: string;
  code: string;
  type: DiscountType;
  value: number;
  min_order_value: number | null;
  max_uses: number | null;
  usage_count: number;
  expires_at: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type GdprLog = {
  id: string;
  user_id: string;
  action: GdprAction;
  ip_address: string | null;
  user_agent: string | null;
  notes: string | null;
  created_at: string;
};

export type Invoice = {
  id: string;
  order_id: string;
  user_id: string;
  invoice_number: string;
  subtotal: number;
  vat_amount: number;
  vat_rate: number;
  total: number;
  currency: string;
  pdf_url: string | null;
  issued_at: string;
};

export type Notification = {
  id: string;
  user_id: string | null;
  channel: NotificationChannel;
  type: string;
  status: NotificationStatus;
  recipient: string | null;
  sent_at: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
  severity: string | null;
  resolved_at: string | null;
  resolved_by: string | null;
};

export type OrderItem = {
  id: string;
  order_id: string;
  product_id: string;
  quantity: number;
  unit_price: number;
  line_total: number;
};

export type Order = {
  id: string;
  user_id: string;
  address_id: string | null;
  discount_id: string | null;
  status: OrderStatus;
  subtotal: number;
  discount_amount: number;
  vat_rate: number;
  vat_amount: number;
  total: number;
  currency: string;
  notes: string | null;
  created_at: string;
  updated_at: string;
  items?: OrderItem[];
};

export type Payment = {
  id: string;
  order_id: string;
  user_id: string;
  provider: PaymentProvider;
  provider_payment_id: string;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paid_at: string | null;
  created_at: string;
  updated_at: string;
};

export type Product = {
  id: string;
  category_id: string | null;
  name: string;
  slug: string;
  description: string | null;
  sku: string | null;
  ingredients: string | null;
  analytical_constituents: string | null;
  price_gbp: number;
  price_eur: number;
  stock_qty: number;
  weight_grams: number | null;
  images: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
  category?: Category;
};

export type Refund = {
  id: string;
  payment_id: string;
  admin_id: string | null;
  stripe_refund_id: string;
  amount: number;
  reason: RefundReason;
  notes: string | null;
  created_at: string;
};

export type Review = {
  id: string;
  product_id: string;
  user_id: string;
  moderated_by: string | null;
  rating: number;
  title: string | null;
  body: string;
  verified_purchase: boolean;
  is_approved: boolean;
  moderated_at: string | null;
  created_at: string;
};

export type StockMovement = {
  id: string;
  product_id: string;
  admin_id: string | null;
  type: StockMovementType;
  quantity_change: number;
  qty_before: number;
  qty_after: number;
  reference_id: string | null;
  note: string | null;
  created_at: string;
};

export type User = {
  id: string;
  email: string | null;
  full_name: string | null;
  phone: string | null;
  country_code: string;
  role: UserRole;
  gdpr_consent: boolean;
  consent_date: string | null;
  marketing_opt_in: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
};

// ─── Convenience types ───────────────────────────────────

export type OrderWithItems = Order & { items: OrderItem[] };

export type ProductWithCategory = Product & { category: Category };

export type OrderWithPayment = Order & { payment: Payment };
