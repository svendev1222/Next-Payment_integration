import React, { useState, useEffect } from 'react';
import NavMenuDraw from './navMenuDraw';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import classes from './headerNav.module.css';
import { BiSearch } from 'react-icons/bi';

const sections1 = [
  { title: 'Concerts', url: '#' },
  { title: 'Sports', url: '#' },
  { title: 'Arts & Theater', url: '#' },
  { title: 'Family', url: '#' },
  { title: 'More', url: '#' },
];
const sections2 = [
  { title: 'Sign In', url: '#' },
  { title: 'Sell', url: '#' },
  { title: 'Git Cards', url: '#' },
  { title: 'Help', url: '#' },
];

const HeaderNav = (props) => {
  const { specialBg } = props
  
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  return (
    <>
      <div className={scroll ? classes.headerToolScroll : classes.headerTool}>
        <Toolbar component='nav' variant='dense'>
          {sections1.map((section1) => (
            <Link
              style={{ textDecoration: 'none' }}
              noWrap
              key={section1.title}
              href={section1.url}
              className={classes.navToolbarLink}
            >
              {section1.title}
            </Link>
          ))}
        </Toolbar>
        <div className={classes.navbarLogo}>
          <a href='/'>
            <img
              className={classes.navbarLogoImg}
              src='/images/Homepage1/logo-white 1.png'
            />
          </a>
        </div>
        <div className={classes.rightSideMenu}>
          {/* <div className={classes.navbarSearch}>
          // <span className="fa fa-search"></span>
          <BiSearch color='white' size={20} />
          <input
            type='text'
            className={classes.navbarSearchInput}
            placeholder='Find of millions of live experiences'
          />
        </div> */}
          <Toolbar component='nav' variant='dense'>
            {sections2.map((section2) => (
              <Link
                style={{ textDecoration: 'none' }}
                noWrap
                key={section2.title}
                href={section2.url}
                className={classes.navToolbarLink}
              >
                {section2.title}
              </Link>
            ))}
          </Toolbar>
        </div>
      </div>
      <div
        className={
          scroll
            ? classes.headerToolResponsiveScroll
            : classes.headerToolResponsive
        }
      >
        <NavMenuDraw />
        <div className={classes.navbarLogo}>
          <img
            className={classes.navbarLogoImg}
            src='/images/Homepage1/logo-white 1.png'
          />
        </div>
        <div className={classes.navbarSingIn}>
          {sections2.map((section2) => (
            <Link
              style={{ textDecoration: 'none' }}
              noWrap
              key={section2.title}
              href={section2.url}
              className={classes.navResponsiveToolbarLink}
            >
              {section2.title}
            </Link>
          ))}
        </div>
        <div className={classes.navbarSignInResponsive}>
          <Link
            style={{ textDecoration: 'none' }}
            noWrap
            href=''
            className={classes.navResponsiveToolbarLink}
          >
            SignIn
          </Link>
        </div>
      </div>
    </>
  );
};
export default HeaderNav;
