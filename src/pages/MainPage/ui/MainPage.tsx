import React from 'react';
import {Counter} from "entities/Counter";

interface themeProps {
    theme: string;
}

const MainPage = () => {
    return (
        <div>
            Main Page
            <input type="text" placeholder={'test'}/>
            <Counter/>
        </div>
    );
};

export default MainPage;