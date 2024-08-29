import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
import './index.css';

const App = () => (<><h1 className='heading'> List of my Latest Watched Animes </h1>

<div className='cards'>

{Sdata.map((val, index, sdata) => {
    return (
        <Card
            imgsrc = {val.imgsrc}
            title = {val.title}
            sname = {val.sname}
            link = {val.link}
        />
    )
})
}

</div></>)

export default App;