const style = {
  img: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  div_Image: {
    display: 'flex',
    justifyContent: 'center',
  },
  section_List: {
    width: '100%',
    display: 'flex',
    boxSizing: 'border-box',
  },
  div_Row: {
    display: 'flex',
  },
  arrows: {
    opacity: '0',
    transition: 'all ease 0.3s',
    position: 'absolute',
    width: '40px',
    background: 'rgba(0, 0, 0, 0.623)',
    color: 'white',
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '55px',
    userSelect: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    borderRadius: '8px',
    marginTop: '10px',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  div_item: {
    transform: 'scale(0.9)',
    transition: 'all ease 0.2s',
    borderRadius: '2px',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  span: {
    display: 'inline-block',
    margin: '10px 5px',
  },
}

export default style