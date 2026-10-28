# Architecture
- Keep paid plan prices and checkout destinations in `src/lib/uv-data.ts`; shared checkout links read that data so all purchase buttons stay consistent.
- Paid purchase controls use `CheckoutLink` for direct external navigation, while free trials use the existing `TrialDialog` to preserve device selection and WhatsApp handoff.