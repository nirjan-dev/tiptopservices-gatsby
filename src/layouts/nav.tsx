import React from 'react'
import {IoIosInformationCircle,IoIosGrid,IoIosMail, IoIosApps, IoIosList} from "react-icons/io"
import {Image, Flex, Box, PseudoBox} from "@chakra-ui/core";
import styled from '@emotion/styled';

const StyledNav = styled.nav`

    .nav-icon{
        width: 2rem;
        height: 2rem;
        margin: 0 auto;
    }

    .nav{
        list-style-type: none;
    }

    .nav-item{
        text-align: center;
        display: block;
    }
    
`;

function Nav() {
    return (
        <StyledNav role="navigation">
            <Image display={["none","block"]} src="https://gradientjoy.com/200"/>

            <Flex boxShadow="0px -4px 10px rgba(0, 0, 0, 0.1)" position="fixed" bottom="0" left="0" right="0" className="nav" as="ul" padding="3" justifyContent="space-between" alignItems="center">
                <Box as="li">
                    <PseudoBox color="primary.500" as="a" _hover={
                        {
                            color: "primary.500"
                        }
                    } _active={{
                        color: "primary.600"
                    }} href="#" className="nav-item">
                        <img className="nav-icon" src="https://gradientjoy.com/200" alt="tiptop pest control"/>
                        <span>Home</span>
                    </PseudoBox>
                </Box>
                <Box>
                    <PseudoBox _hover={
                        {
                            color: "primary.500"
                        }
                    } _active={{
                        color: "primary.600"
                    }} as="a"  href="#" className="nav-item">
                        <IoIosInformationCircle className="nav-icon"/>
                        <span>Why us?</span>
                    </PseudoBox>
                </Box>
                <Box as="li">
                    <PseudoBox _hover={
                        {
                            color: "primary.500"
                        }
                    } _active={{
                        color: "primary.600"
                    }} as="a" href="#" className="nav-item">
                        <IoIosList className="nav-icon"/>
                        
                        <span>Services</span>
                    </PseudoBox>
                </Box>
                <Box as="li">
                    <PseudoBox _hover={
                        {
                            color: "primary.500"
                        }
                    } _active={{
                        color: "primary.600"
                    }} as="a"  href="#" className="nav-item">
                        <IoIosMail className="nav-icon"/>
                       
                        <span>Contact</span>
                    </PseudoBox>
                </Box>
            </Flex>
        </StyledNav>
    )
}

export default Nav
