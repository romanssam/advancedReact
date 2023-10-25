import React, {useState} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {Modal} from "shared/ui/Modal/Modal";

const App = () => {
    const { theme } = useTheme()

    const [open, setOpen] = useState(false)

    return (
        <div className='app' data-theme={theme}>
            <Navbar />
            <button onClick={() => setOpen(true)}>Открыть модалку</button>
            <Modal isOpen={open} onClose={() => setOpen(false)} >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto consequatur debitis doloremque eius eveniet, ipsam ipsum laborum, libero, nemo officiis optio quasi soluta veniam vero. Ipsam maxime neque temporibus!
            </Modal>
            <div className={'content-page'}>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};

export default App;
