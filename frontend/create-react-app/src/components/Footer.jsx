import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer(props) {
    return (
        <div className={props.login ? "fixed-bottom" : ""}>
            <p>Made with 💓 by <a href="https://www.linkedin.com/in/jonkimuw/">Jonathan Kim</a> &copy; 2024</p>
        </div>
    )
}

export default Footer;