import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import NavbarAlt from './components/NavbarAlt'
import BlogDetail from './pages/BlogDetail'
import ResearchDetail from './pages/ResearchDetail'
import Academic from './pages/academics/Academic'
import DepartmentDetail from './pages/academics/DepartmentDetail'
import Faculty from './pages/academics/Faculty'
import FacultyDetail from './pages/academics/FacultyDetail'
import Admission from './pages/academics/Admission'
import About from './pages/About'
import Alumni from './pages/Alumni'
import CampusLife from './pages/CampusLife'
import Curriculam from './pages/academics/Curriculam'
import Scolarship from './pages/academics/Scolarship'
import Students from './pages/student/Students'
import ClubDetail from './pages/student/ClubDetail'

function App() {
  return (
   <>
   <NavbarAlt/>
   <Routes>
    <Route path='/' element={<Home title='home'/>} />
    <Route path='/about' element={<About/>}/>
    <Route path='/alumni' element={<Alumni/>}/>
    <Route path='/student' element={<Students/>}/>
    <Route path='/student/club/:id' element={<ClubDetail/>}/>
    <Route path='/campus-life' element={<CampusLife/>}/>
    <Route path='/blog/:id' element={<BlogDetail/>}/>
    <Route path='/research/:id' element={<ResearchDetail/>}/>
    <Route path='/academic/:programmeName' element={<Academic/>}/>
    <Route path='/academic/:programmeName/:department' element={<DepartmentDetail/>}/>
    <Route path='/academic/:programmeName/:department/faculty' element={<Faculty/>}/>
    <Route path='/academic/:programmeName/:department/faculty/:facultyName' element={<FacultyDetail/>}/>
    <Route path='/academic/:programmeName/:department/admission' element={<Admission/>}/>
    <Route path='/academic/:programmeName/:department/curriculam' element={<Curriculam/>}/>
    <Route path='/academic/:programmeName/:department/scholarship' element={<Scolarship/>}/>
   </Routes>
   <Footer/>
   </>
  )
}

export default App
