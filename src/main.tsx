import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { LandingPage } from "./pages/LandingPage";
import { DocsLayout } from "./layouts/DocsLayout";
import { DesktopIntro } from "./pages/desktop/Introduction";
import { InstallationGuide } from "./pages/desktop/Installation";
import { Architecture } from "./pages/desktop/Architecture";
import { ReceptionIntroduction } from "./pages/desktop/modules/reception/Introduction";
import { ReceptionDashboardPage } from "./pages/desktop/modules/reception/Dashboard";
import { ReceptionRegistration } from "./pages/desktop/modules/reception/Registration";
import { ReceptionBilling } from "./pages/desktop/modules/reception/Billing";
import { ReceptionInquiries } from "./pages/desktop/modules/reception/Inquiries";
import { ReceptionPatients } from "./pages/desktop/modules/reception/Patients";
import { ReceptionSchedule } from "./pages/desktop/modules/reception/Schedule";
import { ComponentModals } from "./pages/desktop/components/Modals";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />

        {/* Documentation Sections wrapped in the Layout */}
        <Route element={<DocsLayout />}>
          <Route path="/desktop/introduction" element={<DesktopIntro />} />
          <Route path="/desktop/installation" element={<InstallationGuide />} />
          <Route path="/desktop/architecture" element={<Architecture />} />

          {/* Reaction Modules */}
          <Route
            path="/desktop/modules/reception"
            element={<ReceptionIntroduction />}
          />
          <Route
            path="/desktop/modules/reception/dashboard"
            element={<ReceptionDashboardPage />}
          />
          <Route
            path="/desktop/modules/reception/registration"
            element={<ReceptionRegistration />}
          />
          <Route
            path="/desktop/modules/reception/patients"
            element={<ReceptionPatients />}
          />
          <Route
            path="/desktop/modules/reception/schedule"
            element={<ReceptionSchedule />}
          />
          <Route
            path="/desktop/modules/reception/billing"
            element={<ReceptionBilling />}
          />
          <Route
            path="/desktop/modules/reception/inquiries"
            element={<ReceptionInquiries />}
          />

          {/* Components */}
          <Route
            path="/desktop/components/modals"
            element={<ComponentModals />}
          />
          <Route
            path="/desktop/components/chat"
            element={<PlaceholderPage title="Chat System" />}
          />
          <Route
            path="/desktop/components/file-viewer"
            element={<PlaceholderPage title="File Viewer" />}
          />
          <Route
            path="/desktop/components/billing-drawer"
            element={<PlaceholderPage title="Billing Drawer" />}
          />

          {/* UI & Core */}
          <Route
            path="/desktop/ui/status"
            element={<PlaceholderPage title="System Status" />}
          />
          <Route
            path="/desktop/ui/search"
            element={<PlaceholderPage title="Global Search" />}
          />

          <Route
            path="/desktop/core/store"
            element={
              <PlaceholderPage
                title="Zustand Store"
                description="Global state management using atomic stores."
              />
            }
          />
          <Route
            path="/desktop/core/types"
            element={<PlaceholderPage title="TypeScript Types" />}
          />
          <Route
            path="/desktop/core/utils"
            element={<PlaceholderPage title="Utility Functions" />}
          />
          <Route
            path="/desktop/core/components"
            element={<PlaceholderPage title="Global Components" />}
          />
          <Route
            path="/desktop/core/screens"
            element={<PlaceholderPage title="App Screens" />}
          />
        </Route>

        <Route path="*" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
