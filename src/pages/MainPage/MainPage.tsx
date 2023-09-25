import React from 'react';

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