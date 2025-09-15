const GlobalCSS = () => (
  <style>{`
    :root {
      --q9x-red: #D90429;
      --q9x-red-600: #EF233C;
      --q9x-black: #0b0d10;
      --q9x-white: #ffffff;
    }
    html, body, #root { height: 100%; }
    /* Do NOT set body background here; PageWrap controls backgrounds per theme */
  `}</style>
);
export default GlobalCSS;