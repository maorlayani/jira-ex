import { Route, Routes } from 'react-router-dom'
import './assets/styles/main.scss'
import { AppHeader } from './cmps/app-header'
import { CreateTicketModal } from './pages/create-ticket-modal'
import { FindingItemsTable } from './pages/finding-items-table'

export const App = () => {

  return (
    <section className="app">
      <AppHeader />
      <Routes>
        <Route path='/' element={<FindingItemsTable />} >
          <Route path='create-ticket' element={<CreateTicketModal />} />
        </Route>
      </Routes>
    </section>
  )
}