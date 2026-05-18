import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GuestLecturePage from "./pages/GuestLecturePage";
import HomePage from "./pages/HomePage";
import IndustriesPage from "./pages/IndustriesPage";
import InstitutionsPage from "./pages/InstitutionsPage";
import InternshipsPage from "./pages/InternshipsPage";
import LoginPage from "./pages/LoginPage";
import RAndDPage from "./pages/RAndDPage";
import RegisterPage from "./pages/RegisterPage";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: () => (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});
const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: LoginPage,
});
const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: RegisterPage,
});
const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});
const industriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/industries",
  component: IndustriesPage,
});
const institutionsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/institutions",
  component: InstitutionsPage,
});
const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});
const internshipsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/internships",
  component: InternshipsPage,
});
const guestLectureRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/guest-lectures",
  component: GuestLecturePage,
});
const rAndDRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/r-and-d",
  component: RAndDPage,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  loginRoute,
  registerRoute,
  aboutRoute,
  industriesRoute,
  institutionsRoute,
  contactRoute,
  internshipsRoute,
  guestLectureRoute,
  rAndDRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <Toaster />
    </QueryClientProvider>
  );
}
