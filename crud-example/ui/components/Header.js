import React from 'react';
import Link  from 'next/link';


const linkStyle = {
    marginRight: 15
}

class Header extends React.Component {

    render() {
        return (
            <div>
                <Link href="/">
                    <a className="header-link">Home</a>
                </Link>
                <Link href="/about">
                    <a className="header-link">About</a>
                </Link>
            </div>
        )
    }

}


export default Header;
