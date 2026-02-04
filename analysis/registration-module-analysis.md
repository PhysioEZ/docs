# Patient Registration Module Analysis

This document provides a technical breakdown of the Patient Registration module (`src/reception/Registration.tsx`).

## Core Functionality
The Registration module manages the list of patient registrations for a specific branch. It allows receptionists to filter, search, and manage the status of registrations, handle payment corrections, and convert registrations into clinical service tracks.

## Data Schema & State
The module primarily works with `RegistrationRecord`, which includes:
- **Identity**: `registration_id`, `patient_name`, `phone_number`, `patient_photo_path`, `age`, `gender`.
- **Clinical**: `chief_complain`, `consultation_type`, `status`.
- **Financial**: `consultation_amount`, `payment_method`, `approval_status`.
- **Metadata**: `created_at`, `reffered_by`.

## API Endpoints Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/reception/registration` | `POST` (action: `fetch`) | Fetches paginated registration list with filters. |
| `/reception/registration` | `POST` (action: `options`) | Loads filters like referrers, conditions, and test types. |
| `/reception/registration` | `POST` (action: `details`) | Retrieves full details for a single registration. |
| `/reception/registration` | `POST` (action: `update_status`) | Updates registration status (pending/consulted/closed). |
| `/reception/registration` | `POST` (action: `update_details`) | Edits existing registration information. |
| `/reception/search_patients` | `GET` | Powers the global patient/registration search. |
| `/admin/services` | `GET` | Fetches active service tracks for conversion. |

## Sub-Components Used

### UI Components
- **CustomSelect**: Reusable dropdown for filters and form fields.
- **StatusDropdown**: A specialized portal-based dropdown for inline status updates.
- **GlobalSearch**: Unified search overlay for looking up patients.
- **KeyboardShortcuts**: Managed set of hotkeys for the registration logic.

### Modals
- **DetailsModal**: Full-screen overlay for viewing and editing registration data.
- **BillModal**: Generates and previews a printable PDF/HTML invoice.
- **ConfirmModal**: Transactional confirmation for destructive actions (like cancellation).
- **DynamicServiceModal**: Handles the logic for converting a registration into a specific treatment track (e.g., Physio, Lab).
- **UpdatePaymentModal**: Allows correcting/splitting payments after a registration is rejected or needs adjustment.

## Key Interactions & Logic
1. **Optimistic Status Updates**: When a status is changed via `StatusDropdown`, the UI updates immediately before the API call completes to ensure a snappy experience.
2. **Service Track Conversion**: The "Bureau Quick Converter" allows for one-click initialization of treatment workflows if the patient exists in the registry.
3. **Approval Locking**: Registrations with `approval_status` as `pending` or `rejected` are locked from certain clinical actions until administrative clearance.
4. **Print Orchestration**: Uses a dedicated `printable-bill` DOM element and transient window for high-fidelity browser-based printing.
5. **Photo Normalization**: Implements `getPhotoUrl` logic to normalize server-side file paths for frontend display.
