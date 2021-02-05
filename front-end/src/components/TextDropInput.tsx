import React from 'react';
import CSS from 'csstype'
import './TextDropInput.css'

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

type Props = {
  label: string;
  users: User[];
  // onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
}


const TextDropInput:React.FC<Props> = ({label, users }) => {
  const [drop, setDrop] = React.useState<CSS.Properties>({});
  const ulWrapper = React.useRef<HTMLUListElement>(null);

  const useOutsideAlerter = (ref: React.RefObject<HTMLUListElement>) => {
    React.useEffect(() => {
      const handleClickOutside = (e: { target: any }) => {
        console.log(e.target)
        if (ref.current && !ref.current.contains(e.target)) {
          console.log('You clicked outside of me!');
          setDrop(up);
        }
      }

      document.addEventListener('mousedown', handleClickOutside );
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref] );
  }

  const handleArrowClick = () => {
    setDrop(down);
    
  }

  useOutsideAlerter(ulWrapper);

  return (
    <div>
      <label htmlFor='userInput'>{label}</label>
      <div className='inputContainer'>
        <input id='userInput' type='text' className='input' placeholder='Digite o usuário' />
        <div>
          <div className='arrow-down' onClick={handleArrowClick}></div>
        </div>
      </div>
      <ul ref={ulWrapper} style={drop}>
        {users.map((user: User) => 
          <li key={user.id}>{user.id} - {user.first_name}</li>
        )}
      </ul>
    </div>
  )
}

const down:CSS.Properties = {
  maxHeight: '300px',
  opacity: '1',
  visibility: 'visible'
}
const up:CSS.Properties = {
  maxHeight: '0',
  opacity: '0',
  // visibility: 'hidden'
}

export default TextDropInput
