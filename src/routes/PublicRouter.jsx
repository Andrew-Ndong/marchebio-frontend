import { Route, Routes } from 'react-router'

import { Home, Produits, Services, Blog } from '@/pages/Public'
import Error from '../_utils/Error'

const PublicRouter = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />

        <Route path='/home' element={<Home />} />
        <Route path='/produits' element={<Produits />} />
        <Route path='/services' element={<Services />} />
        <Route path='/blog' element={<Blog />} />

        <Route path='*' element={<Error />} />
      </Routes>
    </>
  )
}

export default PublicRouter
