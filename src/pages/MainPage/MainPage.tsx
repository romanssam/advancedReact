import React from 'react';
import Counter from "../../components/Counter";

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
