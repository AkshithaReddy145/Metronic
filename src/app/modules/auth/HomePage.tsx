import {Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import { HomePageLayout } from './HomePageLayout'
import { AccountSelectionPage } from './components/AccountSelectionPage'

const HomePage = () => (
  <Routes>
    <Route element={<HomePageLayout />}>
    <Route path='home' element={<AccountSelectionPage />} />
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<AccountSelectionPage />} />
    </Route>
  </Routes>
)

export {HomePage}