import {render} from "react-dom";
import { createRoot } from 'react-dom/client';
import 'app/styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import App from "app/App";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
)