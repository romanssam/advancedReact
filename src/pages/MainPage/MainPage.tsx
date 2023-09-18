import React, {useEffect, useState} from 'react';
import Counter from "../../components/Counter";

interface themeProps {
    theme: string;
}

const MainPage = () => {
    return (
        <div>
            Main Page
            <input type="text" placeholder={'test'}/>
            <Counter />
        </div>
    );
};

export default MainPage;