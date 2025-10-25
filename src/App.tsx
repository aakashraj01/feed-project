import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { Layout } from './components/layout/Layout';
import { Feed } from './pages/Feed';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path={ROUTES.HOME} element={<Feed />} />
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
