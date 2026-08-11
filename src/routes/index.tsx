import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AdminLayout from "../layouts/AdminLayout";

import ProtectedRoute from "../components/common/ProtectedRoute";

// Public Website
import LandingPage from "../landing-page/LandingPage";
import PublicArticles from "../landing-page/Articles";
import ArticleDetail from "../landing-page/ArticleDetail";
import Team from "../landing-page/Team";
import Approach from "../landing-page/Approach";

// Auth
import Login from "../pages/Login";

// Error
import NotFound from "../pages/NotFound";


// Dashboard
import Dashboard from "../pages/Dashboard";
import Contacts from "../pages/DashboardContacts";


// Admin Articles
import Articles from "../pages/Articles/Articles";
import CreateArticle from "../pages/Articles/CreateArticle";
import EditArticle from "../pages/Articles/EditArticle";


// Categories
import Categories from "../pages/Categories";
import CreateCategory from "../pages/Categories/CreateCategory";
import EditCategory from "../pages/Categories/EditCategory";


// Users
import Users from "../pages/Users/Users";
import CreateUser from "../pages/Users/CreateUser";
import EditUser from "../pages/Users/EditUser";


// Services
import AdminServices from "../pages/Services/Services";
import CreateService from "../pages/Services/CreateService";
import EditService from "../pages/Services/EditService";


// Admin
import Settings from "../pages/Settings/Settings";
import AdminTeam from "../pages/Team";
import About from "../pages/About";


export default function AppRouter() {
  return (
    <BrowserRouter>

      <Routes>

        {/* =====================================================
            PUBLIC WEBSITE
        ====================================================== */}

        <Route element={<MainLayout />}>

          <Route
            index
            element={<LandingPage />}
          />


          <Route
            path="articles"
            element={<PublicArticles />}
          />


          <Route
            path="articles/:id"
            element={<ArticleDetail />}
          />


          <Route
            path="team"
            element={<Team />}
          />


          <Route
            path="approach"
            element={<Approach />}
          />

        </Route>



        {/* =====================================================
            AUTHENTICATION
        ====================================================== */}

        <Route
          path="/login"
          element={<Login />}
        />



        {/* =====================================================
            ADMIN / CMS
        ====================================================== */}

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



          {/* About */}

          <Route
            path="/dashboard/about"
            element={<About />}
          />



          {/* Contacts */}

          <Route
            path="/dashboard/contacts"
            element={<Contacts />}
          />



          {/* =====================
              ARTICLES
          ====================== */}

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



          {/* =====================
              CATEGORIES
          ====================== */}

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



          {/* =====================
              USERS
          ====================== */}

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



          {/* =====================
              TEAM
          ====================== */}

          <Route
            path="/dashboard/team"
            element={<AdminTeam />}
          />



          {/* =====================
              SETTINGS
          ====================== */}

          <Route
            path="/dashboard/settings"
            element={<Settings />}
          />



          {/* =====================
              SERVICES
          ====================== */}

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



        {/* =====================================================
            404
        ====================================================== */}

        <Route
          path="*"
          element={<NotFound />}
        />


      </Routes>

    </BrowserRouter>
  );
}