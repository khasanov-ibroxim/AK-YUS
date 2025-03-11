import React from 'react';
import {Link} from 'react-router-dom';

const WithUsComponent = () => {
    return (
        <div className={"with-us"}>
            <h1>Affilate Program</h1>
            <ul>
                <li>Build your own online sporting goods store!</li>
                <li>If you have a web site, you can make money selling sporting goods products. It’s easy and it’s free to join.</li>
                <li><Link to={"#"}>Click here to join now</Link>  and earn commissions of up to 6%</li>
            </ul>
        </div>
    );
};

export default WithUsComponent;