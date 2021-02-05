import React from 'react'
import CSS from 'csstype'

type Props = {
  children: JSX.Element | JSX.Element [],
};

const Card:React.FC<Props> = ({ children }): JSX.Element => {
  const [windowSize, setWindowSize] = React.useState(window.matchMedia("(min-width: 530px)").matches);

  React.useEffect(() => {
    const handler = (e: { matches: any; }) => setWindowSize(e.matches);
    window.matchMedia("(min-width: 530px)").addEventListener('change', handler);

    return () => window.matchMedia("(min-width: 530px)").removeEventListener('change', handler);
  }, [] )
  
  const cardBig: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '500px',
    minHeight: '28ch',
    padding: '2em 1.2em',
    border: '1px solid',
    borderRadius: '10px',
    backgroundColor: '#FBE7C6'
  };
  const cardSmall: CSS.Properties = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    minHeight: '28ch',
    padding: '2em 1.2em',
    border: '1px solid',
    borderRadius: '10px',
    backgroundColor: '#FBE7C6'
  };

  return (
    <div style={windowSize ? cardBig : cardSmall}>
      {children}
    </div>
  )
}

export default Card
