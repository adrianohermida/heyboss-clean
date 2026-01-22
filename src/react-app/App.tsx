const AboutPage2 = lazy(() => import('./pages/AboutPage2'));
const ContactPage2 = lazy(() => import('./pages/ContactPage2'));
import { Routes, Route, useLocation } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
// Lazy load components para melhor performance
const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const RegisterPage = lazy(() => import('./pages/RegisterPage'))
const ForgotPasswordPage = lazy(() => import('./pages/ForgotPasswordPage'))
const ResetPasswordPage = lazy(() => import('./pages/ResetPasswordPage'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))
const AuthProtect = lazy(() => import('./components/AuthProtect'))
const UnsubscribePage = lazy(() => import('./pages/UnsubscribePage'))
const ProcessDetailPage = lazy(() => import('./pages/ProcessDetailPage'))
const ClientPortal = lazy(() => import('./pages/ClientPortal'))
const CheckoutSuccessPage = lazy(() => import('./pages/CheckoutSuccessPage'))
const CheckoutErrorPage = lazy(() => import('./pages/CheckoutErrorPage'))
const CheckoutCancelPage = lazy(() => import('./pages/CheckoutCancelPage'))
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'))
const AppointmentsPage = lazy(() => import('./pages/AppointmentsPage'))
const AuthCallback = lazy(() => import('./pages/AuthCallback'))

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen" style={{ background: '#081a13' }}>
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 mx-auto mb-4" style={{ borderColor: '#00d969', borderTopColor: '#00d969', borderBottomColor: '#00d969' }}></div>
      <p style={{ color: '#00d969' }}>Carregando...</p>
    </div>
  </div>
)

export default function App() {
  const location = useLocation()
  const hideHeaderPaths = ['/login', '/register', '/forgot-password', '/reset-password']
  const hideFooterPaths = ['/login', '/register', '/forgot-password', '/reset-password']
  const showHeader = !hideHeaderPaths.includes(location.pathname)
  const showFooter = !hideFooterPaths.includes(location.pathname)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      {showHeader && <Header />}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about2" element={<AboutPage2 />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact2" element={<ContactPage2 />} />
          <Route path="/unsubscribe" element={<UnsubscribePage />} />
          <Route path="/process/:id" element={<ProcessDetailPage />} />
          <Route path="/client-portal" element={<ClientPortal />} />
          <Route path="/checkout/success" element={<CheckoutSuccessPage />} />
          <Route path="/checkout/error" element={<CheckoutErrorPage />} />
          <Route path="/checkout/cancel" element={<CheckoutCancelPage />} />
          <Route path="/appointments" element={<AppointmentsPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          {/* Protected Routes: apenas dashboard e profile */}
          <Route element={<AuthProtect />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Suspense>
      {showFooter && <Footer />}
    </div>
  )
}
