import React from 'react';
import {PageLoader} from "widgets/PageLoader/ui/PageLoader";

interface themeProps {
    theme: string;
}

const MainPage = () => {
    return (
        <div>
            Main Page
            <input type="text" placeholder={'test'}/>
        </div>
    );
};

export default MainPage;