import CSS from 'csstype'

type Props = {
  children: JSX.Element | JSX.Element [],
};

const Card:React.FC<Props> = ({ children }) => {
  return (
    <div style={card}>
      {children}
    </div>
  )
}

const card: CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '58ch',
  maxWidth: '100ch',
  minHeight: '28ch',
  padding: '2em 1.2em',
  border: '1px solid',
  borderRadius: '10px',
  marginTop: '50px',
  backgroundColor: '#FBE7C6'
};

export default Card
