import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    html {
        max-width: 100%;
        scroll-behavior: smooth;

    }
    
    body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        max-width: 100%;
        text-decoration: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        background-color: #121212; 
        background-image: radial-gradient(circle, rgba(13, 255, 1, 0.1) 30%, rgba(0, 0, 0, 0.8) 70%);
        background-size: 200% 200%;
        background-position: center;
        animation: sprayEffect 10s infinite;
        @keyframes sprayEffect {
          0% { background-position: 0 0; }
          50% { background-position: 100% 100%; }
          100% { background-position: 0 0; }
        }
    }
    
`;
