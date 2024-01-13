import {render} from "react-dom";
import { createRoot } from 'react-dom/client';
import 'app/styles/index.scss'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import App from "app/App";
import ErrorBoundary from "app/providers/ErrorBoundary/ui/ErrorBoundary";
import {StoreProvider} from "app/providers/StoreProvider";

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App/>
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)