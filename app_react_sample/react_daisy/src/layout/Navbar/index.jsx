import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import NavItem from './Sections/NavItem';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleMenu = () => {
        setMenu(!menu);
    }

    return (
        <section>
            <div>
                <div>
                    {/* logo */}
                    <div>
                        <Link to="/" >Logo</Link>
                    </div>
                    {/* nav-items */}
                    <div>
                        <NavItem />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Navbar