import React from 'react'
import styles2 from '../../assets/scss/component/about/Navigation.scss';
import { NavLink } from 'react-router-dom';
const navigation = () => {
    return (
        <nav className={styles2.Navigation}>
            {/* <a href={'/about/luster1031'}>luster1031</a> */}
            <NavLink to={'/about/me'}>Me</NavLink>
            <span />
            {/* <a href={'/about/location'}>Location</a> */}
            <NavLink to={'/about/location'}>Location</NavLink>
        </nav>
    )
}

export default navigation