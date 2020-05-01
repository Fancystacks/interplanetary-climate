import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  :root {
    --fw-light: 300;
    --fw-normal: 400;
    --fw-semi: 500;
    --fw-bold: 700;
    --fs-h1: 1.5rem;
    --fs-h2: 2.25rem;
    --fs-body: 1rem;
    --fs-xl: 4.5rem;
    --clr-light: #fff;
    --clr-gray: #989898;
    --clr-dark: #444;
    --clr-accent: #D06D6D;
    --clr-accent-dark: #613131;
  }
  .sr-only:not(:focus):not(:active) {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6;
    background-image: url("https://user-images.githubusercontent.com/38336934/80783794-27c6f080-8b38-11ea-9434-aa472ee22d50.jpg");
    background-size: cover;
    height: 100vh;
    color: var(--clr-light);
  }
  h1, h2, h3 {
    line-height: 1;
  }
  a {
    color: var(--clr-accent);
  }
  a:hover {
    color: var(--clr-accent-dark);
  }
`;

export const AppWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const MarsClimate = styled.main`
  background: rgba(0, 0, 0, 0.7);
  padding: 2em;
  max-width: 1000px;
  margin: 40px 0;
  border-radius: 20px;
  .main-title {
    font-size: var(--fs-h1);
    font-weight: var(--fw-light);
    text-transform: uppercase;
    color: var(--clr-accent);
    letter-spacing: 2px;
    grid-column: 1 / -1;
  }
  .section-title {
    font-size: var(--fs-h2);
    font-weight: var(--fw-bold);
    margin: 0;
  }
  .reading {
    font-size: var(--fs-h1);
    margin: 0;
    color: var(--clr-gray);
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`