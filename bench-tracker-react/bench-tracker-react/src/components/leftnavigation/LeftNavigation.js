// function LeftNavigation() {
//     return (  
//         <div>
//             <h2>this is left navigation</h2>
//         </div>
//     );
// }

// export default LeftNavigation;
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LeftNavigation.scss';

const sidebarNavItems = [
    {
        display: 'Dashboard',
        icon: <i className='bx bxs-dashboard'></i>,
        to: '/',
        section: ''
    },
    // {
    //     display: 'Employee Table',
    //     icon: <i className='bx bx-table'></i>,
    //     to: '/emptable',
    //     section: 'emptable'
    // },
    {
        display: 'Bench Strength',
        icon: <i className='bx bx-table'></i>,
        to: '/enhancedtable',
        section: 'enhancedtable'
    },
    
    // {
    //     display: 'Calendar',
    //     icon: <i className='bx bx-calendar'></i>,
    //     to: '/calendar',
    //     section: 'calendar'
    // },
    // {
    //     display: 'User',
    //     icon: <i className='bx bx-user'></i>,
    //     to: '/user',
    //     section: 'user'
    // },
    {
        display: 'About Us',
        icon: <i className='bx bxs-cuboid'></i>,
        to: '/aboutus',
        section: 'aboutus'
    },
]

const LeftNavigation = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [stepHeight, setStepHeight] = useState(0);
    const [isMobile, setIsMobile] = useState(false)
    const sidebarRef = useRef();
    const indicatorRef = useRef();
    const location = useLocation();

    useEffect(() => {
        setTimeout(() => {
            const sidebarItem = sidebarRef.current.querySelector('.sidebar__menu__item');
            indicatorRef.current.style.height = `${sidebarItem.clientHeight}px`;
            setStepHeight(sidebarItem.clientHeight);
        }, 50);
    }, []);

    // change active index
    useEffect(() => {
        const curPath = window.location.pathname.split('/')[1];
        const activeItem = sidebarNavItems.findIndex(item => item.section === curPath);
        setActiveIndex(curPath.length === 0 ? 0 : activeItem);
    }, [location]);

    return <div className='sidebar'>

        {/* <div className='full-screen bg-gradient-cold'> */}

        <div className="sidebar__logo">
        <img src="/Brillio_Logo.png" data-testid="brilliologo" className='brilliologo' width="90px" height="40px"/>
            {/* Brillio Bench Tracker */}

            <button className='mobile-menu-icon'

            onClick={()=>setIsMobile(!isMobile)}>

            {isMobile ? (

                 <i className='fas fa-times'></i>

                     ) : ( <i className='fas fa-bars'></i>)}

            </button>   

        </div>
        
        <div ref={sidebarRef} className={isMobile ? "menu-items" : "sidebar__menu"} >
            <div
                ref={indicatorRef}
                className="sidebar__menu__indicator"
                style={{
                    transform: `translateX(-50%) translateY(${activeIndex * stepHeight}px)`
                }}
            ></div>
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar__menu__item ${activeIndex === index ? 'active' : ''}`}>
                            <div className="sidebar__menu__item__icon">
                                {item.icon}
                            </div>
                            <div className="sidebar__menu__item__text">
                                {item.display}
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>

        </div>
    // </div>
    // <div className="full-screen bg-gradient-cold"></div>
   
};

export default LeftNavigation;
