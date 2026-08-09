import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import LandingPage from "../landing-page/LandingPage";
import Home from "../pages/Home";
import About from "../pages/About";
import PublicServices from "../pages/PublicServices";
import AdminServices from "../pages/Services/Services";
import Portfolio from "../pages/Portfolio";
import Articles from "../pages/Articles/Articles";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";
import ProtectedRoute from "../components/common/ProtectedRoute";
import CreateArticle from "../pages/Articles/CreateArticle";
import EditArticle from "../pages/Articles/EditArticle";
import Categories from "../pages/Categories";
import CreateCategory from "../pages/Categories/CreateCategory";
import EditCategory from "../pages/Categories/EditCategory";
import Users from "../pages/Users/Users";
import CreateUser from "../pages/Users/CreateUser";
import EditUser from "../pages/Users/EditUser";
import CreateService from "../pages/Services/CreateService";
import EditService from "../pages/Services/EditService";


export default function AppRouter() {
 
    return (
    <BrowserRouter>
      <Routes>
        {/* Public Website */}
        <Route element={<MainLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="about" element={<About />} />
        <Route path="services" element={<PublicServices />} />
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

<Route
  path="/dashboard/categories"
  element={
    <ProtectedRoute>
      <Categories />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/categories/create"
  element={
    <ProtectedRoute>
      <CreateCategory />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/categories/:id/edit"
  element={
    <ProtectedRoute>
      <EditCategory />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/users"
  element={
    <ProtectedRoute>
      <Users />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/users/create"
  element={
    <ProtectedRoute>
      <CreateUser />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/users/:id/edit"
  element={
    <ProtectedRoute>
      <EditUser />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/services"
  element={
    <ProtectedRoute>
      <AdminServices />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/services/create"
  element={
    <ProtectedRoute>
      <CreateService />
    </ProtectedRoute>
  }
/>

<Route
  path="/dashboard/services/:id/edit"
  element={
    <ProtectedRoute>
      <EditService />
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

