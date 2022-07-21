import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoHeader from './components/todoHeader';
import TodoFooter from './components/todoFooter';
import TodoAll from './components/todoAll';
import TodoCompleted from './components/todoCompleted';
import TodoIncompleted from './components/todoIncompleted';

function App() {
  return (
    <BrowserRouter>
      <div className="todoapp">
        <TodoHeader />
        <Routes>
          <Route path="/" exact element={<TodoAll />} />
          <Route path="/incompleted" element={<TodoIncompleted />} />
          <Route path="/completed" element={<TodoCompleted />} />
        </Routes>
        <TodoFooter />
      </div>
    </BrowserRouter>

  );
}

export default App;
