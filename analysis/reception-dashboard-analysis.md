# Reception Dashboard Analysis

This document provides a technical breakdown of the Reception Dashboard component (`src/reception/Dashboard.tsx`).

## Core Functionality
The Reception Dashboard serves as the central hub for clinic receptionists. It provides real-time statistics, quick action shortcuts, and management tools for registrations, tests, inquiries, and billing.

## Data Schema & State
The dashboard primarily consumes `DashboardData`, which includes:
- **Registration**: Today's totals, pending, consulted, and monthly metrics.
- **Inquiry**: Today's leads (Quick and Test inquiries).
- **Patients**: Current census (attendance, total, active/inactive).
- **Tests**: Daily and monthly lab operation metrics.
- **Collections**: Deep breakdown of financial performance (amounts and dues).
- **Schedule**: Live list of upcoming appointments.
- **Weekly**: Seven-day revenue trend data.

## API Endpoints Reference

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/system/status` | `GET` | Checks current server/app version. |
| `/reception/dashboard` | `GET` | Fetches the core stats and schedule for the current branch. |
| `/reception/form_options` | `GET` | Retrieves dynamic options for dropdowns (referrers, payment methods, staff, test types). |
| `/reception/get_pending_approvals` | `GET` | Lists registrations/tests waiting for administrative approval. |
| `/reception/get_slots` | `GET` | Retrieves available time slots for a specific date. |
| `/reception/notifications` | `GET` | Fetches recent app-wide alerts for the logged-in employee. |
| `/reception/search_patients` | `GET` | Unified search across patients, registrations, and inquiries. |
| `/reception/registration_submit` | `POST` | Submits new patient registration with photo and payment splits. |
| `/reception/test_submit` | `POST` | Processes lab test bookings with advance payments. |
| `/reception/inquiry_submit` | `POST` | Records a new service inquiry/lead. |
| `/reception/test_inquiry_submit` | `POST` | Records a lead specifically for lab services. |

## Sub-Components Used

### UI Components
- **CustomSelect**: A controlled dropdown component for MD3-style forms.
- **DatePicker**: A localized date selection modal.
- **TimePicker**: A slot-based time selection modal.
- **GlobalSearch**: An overlay search interface (triggered by `Alt + S`).
- **DailyIntelligence**: A drawer/modal providing higher-level insights.

### Functional Modals
- **ChatModal**: Internal messenger for staff communication.
- **LogoutConfirmation**: High-visibility confirmation before session termination.
- **KeyboardShortcuts**: A help overlay listing all system hotkeys (`Alt + /`).
- **PhotoModal**: Interfaces with the system webcam for capturing patient profile photos.

## Key Interactions & Logic
1. **Parallel State Hydration**: On mount, the module uses `Promise.all` to fetch dashboard stats, form options, approvals, and notifications simultaneously, minimizing load times.
2. **Optimistic Form Processing**: Handles complex payment splitting logic locally before submitting to the backend.
3. **Event-Driven UI**: Listens for the `trigger-system-status-check` custom event to keep the dashboard synchronized with system-level health.
4. **Hardware Interfacing**: Includes logic for webcam access (MediaDevices API) for patient photo capture.
5. **Keyboard Velocity**: Implements a comprehensive set of "Alt" based shortcuts to allow mouse-less navigation for power users.
