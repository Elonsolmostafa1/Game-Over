import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import RootLayout from './Components/RootLayout/RootLayout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';
import Browser from './Components/Platforms/Browser/Browser';
import Pc from './Components/Platforms/Pc/Pc';
import ReleaseDate from './Components/SortBy/ReleaseDate/ReleaseDate';
import Popularity from './Components/SortBy/Popularity/Popularity';
import Alphabetical from './Components/SortBy/Alphabetical/Alphabetical';
import Relevance from './Components/SortBy/Relevance/Relevance';
import Racing from './Components/Category/Racing/Racing';
import Sports from './Components/Category/Sports/Sports';
import Social from './Components/Category/Social/Social';
import Shooter from './Components/Category/Shooter/Shooter';
import OpenWorld from './Components/Category/OpenWorld/OpenWorld';
import Fantasy from './Components/Category/Fantasy/Fantasy';
import ActionRBG from './Components/Category/ActionRBG/ActionRBG';
import Action from './Components/Category/Action/Action';
import Fight from './Components/Category/Fight/Fight';
import Battle from './Components/Category/Battle/Battle';
import All from './Components/All/All';
import Zombie from './Components/Category/Zombie/Zombie';
import GameDetails from './Components/GameDetails/GameDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import InverseProtectedRoute from './Components/InverseProtectedRoute/InverseProtectedRoute';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';



let routers = createBrowserRouter([
  {path:'/', element: <RootLayout/>, children:[
    {path:'login', element: <InverseProtectedRoute><Login/></InverseProtectedRoute>},
    {path:'register', element: <InverseProtectedRoute><Register/></InverseProtectedRoute>},
    {index:true, element: <ProtectedRoute><Home/></ProtectedRoute>},
    {path:'all', element: <ProtectedRoute><All/></ProtectedRoute>},
    {path:'Platforms/browser', element: <ProtectedRoute><Browser/></ProtectedRoute>},
    {path:'Platforms/pc', element: <ProtectedRoute><Pc/></ProtectedRoute>},
    {path:'sort-by/release-date', element: <ProtectedRoute><ReleaseDate/></ProtectedRoute>},
    {path:'sort-by/popularity', element: <ProtectedRoute><Popularity/></ProtectedRoute>},
    {path:'sort-by/alphbetical', element: <ProtectedRoute><Alphabetical/></ProtectedRoute>},
    {path:'sort-by/relevance', element: <ProtectedRoute><Relevance/></ProtectedRoute>},
    {path:'Category/racing', element: <ProtectedRoute><Racing/></ProtectedRoute>},
    {path:'Category/sports', element: <ProtectedRoute><Sports/></ProtectedRoute>},
    {path:'Category/social', element: <ProtectedRoute><Social/></ProtectedRoute>},
    {path:'Category/shooter', element: <ProtectedRoute><Shooter/></ProtectedRoute>},
    {path:'Category/openworld', element: <ProtectedRoute><OpenWorld/></ProtectedRoute>},
    {path:'Category/zombie', element: <ProtectedRoute><Zombie/></ProtectedRoute>},
    {path:'Category/fantasy', element: <ProtectedRoute><Fantasy/></ProtectedRoute>},
    {path:'Category/actionrbg', element: <ProtectedRoute><ActionRBG/></ProtectedRoute>},
    {path:'Category/action', element: <ProtectedRoute><Action/></ProtectedRoute>},
    {path:'Category/fight', element: <ProtectedRoute><Fight/></ProtectedRoute>},
    {path:'Category/battle', element: <ProtectedRoute><Battle/></ProtectedRoute>},
    {path:'gamedetails/:id', element: <ProtectedRoute><GameDetails/></ProtectedRoute>},
    {path:'*', element: <ErrorPage/>}
    
  ]}
])
function App() {
  return <RouterProvider router={routers}/>
}

export default App;
