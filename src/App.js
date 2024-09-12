import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ViewTasks from './pages/ViewTasks';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Layout from './pages/Layout';
import { TaskProvider } from './context/TaskContext'; // Import TaskProvider

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/tasks' element={<ViewTasks />} />
            <Route path='/add' element={<AddTask />} />
          </Routes>
        </Layout>
      </TaskProvider>
    </BrowserRouter>
  );
}

export default App;
