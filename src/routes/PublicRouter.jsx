import { Route, Routes } from 'react-router'

import { Home, Produits, Services, Blog } from '@/pages/Public'
import Error from '@/utils/Error'
import Login from '@/pages/Auth/Login'
import Layoutpublic from '@/layouts/Layoutpublic'

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route element={<Layoutpublic />}>
          <Route index element={<Home />} />

          <Route path='/home' element={<Home />} />
          <Route path='/produits' element={<Produits />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/auth/login' element={<Login />} />

          <Route path='*' element={<Error />} />
        </Route>

      </Routes>
    </>
  )
}

export default PublicRouter
