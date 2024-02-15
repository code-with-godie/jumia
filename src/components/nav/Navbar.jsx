import React from 'react'
import Topnav from './Topnav'
import styled from 'styled-components'
import NavModel from '../models/NavModel'
const Wrapper = styled.nav`
.side-nav{
    display: none;
}
    @media screen and (max-width:900px) {
        .search-container{
            display: none;
        }
        .logo{
            width:40px;
            height:40px;
        }
    }
    @media screen and (max-width:768px) {
        .link-container{
            justify-content: space-evenly;
            gap:0;
              .icon{
            font-size: 1.5rem !important;
        }
            .active {
            .icon{
            font-size: 1.7rem;
        }
       }
        }
           .user-controls{
            /* display: none; */
            .icon{
                font-size:1rem !important;
            }
            .profile{
                width:35px;
                height:35px;
            }
        }
       
  }
    @media screen and (max-width:650px) {
         .user-controls{
            display: none;
        }

   }
`
const Navbar = () => {
  return (
    <Wrapper>
    <Topnav/>
    <NavModel/>
    </Wrapper>
  )
}

export default Navbar
