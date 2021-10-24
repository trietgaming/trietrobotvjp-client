import './App.css';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { app } = useAuth();

  return (
    app
  );
}

export default App;
