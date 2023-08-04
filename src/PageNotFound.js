import React from 'react';
import PageNot from "./PageNotFound.jpg";


const PageNotFound = () => {
  return (
    <div>
        <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
            <img src={PageNot} alt="pageNotFount"/>
        </div>
    </div>
  )
}

export default PageNotFound;
