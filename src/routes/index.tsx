import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Articles from "../pages/Articles/Articles";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/common/ProtectedRoute";
import CreateArticle from "../pages/Articles/CreateArticle";
import EditArticle from "../pages/Articles/EditArticle";
export default function AppRouter() {
 
    return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        {/* Authentication */}
        <Route path="/login" element={<Login />} />

        {/* Admin */}
<Route element={<AdminLayout />}>

  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    }
  />


  <Route
    path="/dashboard/articles"
    element={
      <ProtectedRoute>
        <Articles />
      </ProtectedRoute>
    }
  />

<Route
  path="/dashboard/articles/create"
  element={
    <ProtectedRoute>
      <CreateArticle />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/articles/:id/edit"
  element={
    <ProtectedRoute>
      <EditArticle />
    </ProtectedRoute>
  }
/>

</Route>
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

