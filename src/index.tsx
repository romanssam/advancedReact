import {render} from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.scss'
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)