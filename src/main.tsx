import { createRoot } from 'react-dom/client';
//import App from './App.tsx';
import RegisterUser from './pages/registerUser/index.tsx';

//createRoot(document.getElementById('root')!).render(<App />);
createRoot(document.getElementById('root')!).render(<RegisterUser />);

/*
    React:

    ------------------
    DOM -> VIRTUAL DOM (ReactDOM)
    ------------------

    Por temas de performance se crea una imagen o copia del DOM original.
*/
