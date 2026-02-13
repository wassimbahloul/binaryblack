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
