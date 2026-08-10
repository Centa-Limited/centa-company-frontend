import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import PublicServices from "../pages/PublicServices";
import Articles from "../pages/Articles/Articles";
import Contact from "../pages/Contact";
import Login from "../pages/Login";

import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/DashboardContacts";

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
import AdminServices from "../pages/Services/Services";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========================================= */}
        {/* PUBLIC WEBSITE */}
        {/* ========================================= */}

        <Route element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="services"
            element={<PublicServices />}
          />

          <Route
            path="articles"
            element={<Articles />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />
        </Route>

        {/* ========================================= */}
        {/* AUTHENTICATION */}
        {/* ========================================= */}

        <Route
          path="/login"
          element={<Login />}
        />

        {/* ========================================= */}
        {/* ADMIN / CMS */}
        {/* ========================================= */}

        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          {/* Dashboard */}

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          {/* Contacts */}

          <Route
            path="/dashboard/contacts"
            element={<Contacts />}
          />

          {/* Articles */}

          <Route
            path="/dashboard/articles"
            element={<Articles />}
          />

          <Route
            path="/dashboard/articles/create"
            element={<CreateArticle />}
          />

          <Route
            path="/dashboard/articles/:id/edit"
            element={<EditArticle />}
          />

          {/* Categories */}

          <Route
            path="/dashboard/categories"
            element={<Categories />}
          />

          <Route
            path="/dashboard/categories/create"
            element={<CreateCategory />}
          />

          <Route
            path="/dashboard/categories/:id/edit"
            element={<EditCategory />}
          />

          {/* Users */}

          <Route
            path="/dashboard/users"
            element={<Users />}
          />

          <Route
            path="/dashboard/users/create"
            element={<CreateUser />}
          />

          <Route
            path="/dashboard/users/:id/edit"
            element={<EditUser />}
          />

          {/* Services */}

          <Route
            path="/dashboard/services"
            element={<AdminServices />}
          />

          <Route
            path="/dashboard/services/create"
            element={<CreateService />}
          />

          <Route
            path="/dashboard/services/:id/edit"
            element={<EditService />}
          />
        </Route>

        {/* ========================================= */}
        {/* 404 */}
        {/* ========================================= */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>
    </BrowserRouter>
  );
}
