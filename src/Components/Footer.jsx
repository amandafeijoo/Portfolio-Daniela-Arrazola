import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import styled from 'styled-components';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import "@fontsource/playfair-display";

const FooterContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #557c70;
  border-top: 2px solid #d2b48c;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.7),
              0 0 10px 4px rgba(34, 139, 34, 0.2),
              0 0 15px 6px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  height: 250px;
  border: 2px solid rgba(34, 139, 34, 0.4);
  margin-left: 80px;        
`;

const SocialIcons = styled(Box)`
  display: flex;
  gap: 10px;
  margin-right: 80px;
  font-size: 30px;
  a {
    color: #f5eedc;
    transition: color 0.3s;

    &:hover {
      color: #305445;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src="/images/logoDaniela.svg" alt="Logo Daniela" />
      <Box textAlign="center">
        <Typography variant="body1" sx={{fontFamily: 'Playfair Display',color: "rgba(48, 84, 69, 0.9)" }}>arrazoladanii@gmail.com</Typography>
        <Typography variant="body2" sx={{fontFamily: 'Playfair Display' }}>34620664428</Typography>
        <Typography variant="body2"sx={{fontFamily: 'Playfair Display' }} >© 2025 Daniela Arrazola</Typography>
      </Box>
      <SocialIcons>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener">
          <InstagramIcon />
        </Link>
        <Link href="https://www.facebook.com" target="_blank" rel="noopener">
          <FacebookIcon />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank" rel="noopener">
          <LinkedInIcon />
        </Link>
        <Link href="https://www.twitter.com" target="_blank" rel="noopener">
          <TwitterIcon />
        </Link>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;