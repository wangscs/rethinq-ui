import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer-wrapper">
            <footer>
                <p>
                    ShellHacks 2020<br/>
                    Team: Janeth Janeth Arriola, Zachary Garcia, Steven Wang<br/>
                    Make sure to wash your hands!<br/>
                    Copyright ⓒ {year}
                </p>
            </footer>
        </div>
    )
}

export default Footer;