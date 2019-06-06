export default {
  css: {
    fontSize: "20px",
    padding: '3rem 5rem',
    red: {
      color: '#dd2e44'
    },
    green: {
      color: '#69aa22'
    },
    pre: {
      fontSize: "1.5rem",
    },
    ref: {
      display: 'block',
      textAlign: 'right',
      fontSize: '1.5rem',
    },
    fontSize: '16px',
    textAlign: 'left',
    '@media screen and (min-width:56em)': {
      fontSize: '32px',
    },
    '@media screen and (min-width:64em)': {
      fontSize: '36px',
    },
    '@media print': {
      fontSize: '30px',
    },
  },
  colors: {
    text: '#173f4f',
    background: '#fefefe',
  },
  h1: {
    textTransform: 'none',
    textAlign: 'center',
  },
  h2: {
    textTransform: 'none',
    textAlign: 'center',
  },
  h3: {
    textTransform: 'none',
    textAlign: 'center',
  },
  h4: {
    textTransform: 'none',
  },
  a: {
    color: '#1f6999',
    textAlign: 'center',
    display: 'block',
    marginTop: '10px',
  },
  p: {
    maxWidth: '80vw'
  },
  ul: {
    maxWidth: '80vw',
    a: {
      display: 'inline'
    }
  },
  code: {
    color: '#2d9d91',
  },
  blockquote: {
    width: '60vw',
    color: "#0a2333",
    fontStyle: 'italic',
    textAlign: 'left',
    borderLeft: '10px solid #ccc',
    padding: '15px',
    margin: '5rem',
    small: {
      fontSize: '1rem',
      fontStyle: 'italic',
      display: "block",
      textAlign: "right",
    }
  },
  hr: {
    border: '1 solid #ccc'
  },
  img: {
    width: '100%', display: 'block', margin: '0 auto'
  },
  table: {
    th: {
      borderBottom: 'none', textAlign: 'center', verticalAlign: 'middle',
      img: {
        width: '70%' }
    },
    td: {
      borderBottom: 'none', textAlign: 'center', verticalAlign: 'middle'
    },
  },
}
