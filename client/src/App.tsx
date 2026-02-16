import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import ServicePresenceAbsence from "./pages/ServicePresenceAbsence";
import ServicePerformanceSecurity from "./pages/ServicePerformanceSecurity";
import ServiceWebMobile from "./pages/ServiceWebMobile";
import ServiceSafetyVerification from "./pages/ServiceSafetyVerification";
import ServiceInvoiceManagement from "./pages/ServiceInvoiceManagement";
import ServiceCloud from "./pages/ServiceCloud";
import ServicePlateformesWeb from "./pages/ServicePlateformesWeb";
import ServiceMobileApplications from "./pages/ServiceMobileApplications";
import ServiceUiUxDesign from "./pages/ServiceUiUxDesign";
import ServiceIntegrationApi from "./pages/ServiceIntegrationApi";
import ServiceIaaSInfrastructure from "./pages/ServiceIaaSInfrastructure";
import ServicePlatformAsAService from "./pages/ServicePlatformAsAService";
import ServiceManagedDatabases from "./pages/ServiceManagedDatabases";
import ServiceSupportMonitoring from "./pages/ServiceSupportMonitoring";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/service/presence-absence"} component={ServicePresenceAbsence} />
      <Route path={"/service/performance-security"} component={ServicePerformanceSecurity} />
      <Route path={"/service/web-mobile"} component={ServiceWebMobile} />
      <Route path={"/service/safety-verification"} component={ServiceSafetyVerification} />
      <Route path={"/service/invoice-management"} component={ServiceInvoiceManagement} />
      <Route path={"/service/cloud"} component={ServiceCloud} />
      <Route path={"/service/plateformes-web"} component={ServicePlateformesWeb} />
      <Route path={"/service/mobile-applications"} component={ServiceMobileApplications} />
      <Route path={"/service/ui-ux-design"} component={ServiceUiUxDesign} />
      <Route path={"/service/integration-api"} component={ServiceIntegrationApi} />
      <Route path={"/service/iaas-infrastructure"} component={ServiceIaaSInfrastructure} />
      <Route path={"/service/platform-service"} component={ServicePlatformAsAService} />
      <Route path={"/service/managed-databases"} component={ServiceManagedDatabases} />
      <Route path={"/service/support-monitoring"} component={ServiceSupportMonitoring} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
