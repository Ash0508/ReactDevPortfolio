import React from 'react';
import styled from 'styled-components';
import { FaXing, FaLinkedin, FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa'; // Example social media icons
import { Bio } from '../../data/constants';

// Example logo URLs - replace these with the actual URLs
const logoUrls = {
  leetcode: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/LeetCode_Logo_1.png?20190719232508',
  gfg: 'https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg',
  codingninjas: 'https://avatars.githubusercontent.com/u/88321750?v=4',
  codechef: 'https://i.pinimg.com/736x/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg',
};

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.h1`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const CustomIcon = styled.img`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 0.2s ease-in-out;
  &:hover {
    filter: brightness(0.8);
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{Bio.name}</Logo>
        <Nav>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.xicon} target="_blank"><FaTwitter /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="_blank"><FaLinkedin /></SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="_blank"><FaInstagram /></SocialMediaIcon>
          <SocialMediaIcon href="https://github.com/Ash0508" target="_blank"><FaGithub /></SocialMediaIcon>
          <SocialMediaIcon href="https://leetcode.com/u/Ankush0508/" target="_blank">
            <CustomIcon src={logoUrls.leetcode} alt="LeetCode" />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.geeksforgeeks.org/user/singhankush0508luvkush/" target="_blank">
            <CustomIcon src={logoUrls.gfg} alt="GeeksforGeeks" />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.naukri.com/code360/profile/luvkush0805" target="_blank">
            <CustomIcon src={logoUrls.codingninjas} alt="CodingNinjas" />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.codechef.com/users/ankush_0508" target="_blank">
            <CustomIcon src={logoUrls.codechef} alt="CodeChef" />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          &copy; 2024 Ankush Singh. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
