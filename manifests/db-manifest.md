# Database Manifest — Phase 1B

## Supabase Project
- Ref: `zfaebixcwxpsausybwps`
- Region: Supabase-hosted (separate account from MCP-linked projects)

## Tables (16)
| Table | Purpose |
|-------|---------|
| users | Customer profiles with GDPR consent, soft delete |
| addresses | Multiple shipping addresses per user |
| categories | Hierarchical product categories (parent_id) |
| products | Products with dual pricing (GBP/EUR), SKU, ingredients |
| orders | Orders with VAT, discount, multi-currency support |
| order_items | Line items per order |
| payments | Stripe/PayPal/Klarna payment records |
| invoices | Auto-numbered invoices (INV-YYYY-000001) |
| refunds | Refund tracking with reason codes |
| reviews | Product reviews with moderation workflow |
| discounts | Discount codes (percent or flat) |
| stock_movements | Inventory audit trail |
| admin_users | Admin panel users with roles and 2FA |
| audit_logs | Admin action audit trail |
| notifications | Multi-channel notifications (email/sms/push) |
| gdpr_logs | GDPR compliance action log |

## Custom Enums (10)
- `admin_role`: super_admin, manager, staff
- `discount_type`: percent, flat
- `gdpr_action`: consent_given, consent_withdrawn, data_access_request, deletion_request, deletion_completed, marketing_opt_in, marketing_opt_out
- `notification_channel`: email, sms, push
- `notification_status`: pending, sent, failed
- `order_status`: pending, paid, processing, shipped, delivered, cancelled, refunded
- `payment_provider`: stripe, paypal, klarna
- `payment_status`: pending, success, failed, refunded
- `refund_reason`: damaged, wrong_item, not_arrived, customer_changed_mind, other
- `stock_movement_type`: stock_in, sale, damaged, adjustment, return
- `user_role`: customer, admin

## RPC Functions (6)
- `fn_anonymise_user` — GDPR user anonymisation
- `fn_batched_delete` — Bulk delete utility
- `fn_get_revenue` — Revenue reporting
- `fn_user_has_purchased` — Verified purchase check (for reviews)
- `is_admin` — Admin role check
- `rls_auto_enable` — Auto-enable RLS on new tables

## Seed Data
- 4 products: Beef Liver Bites, Wild Salmon Strips, Duck Neck Chews, Chicken Tender Strips
- 11 categories: All Treats, Training Treats, Dental Chews, Natural Chews, Grain Free, Puppy Treats, Senior Dog, Gift Bundles, Beef Chews, Chicken Chews, Lamb Chews

## TypeScript Types
- `src/types/database.ts` — 16 table types, 10 enum types, 3 convenience types
- Manually synced from Supabase OpenAPI schema (2026-03-24)

## RLS Policies
- Configured directly in Supabase (not in local migrations)

## Not in DB (client-side or future)
- cart_items (likely client-side state)
- saved_items (likely client-side state)
- subscriptions (future phase)
