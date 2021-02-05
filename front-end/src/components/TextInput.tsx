import './TextInput.css'
import CSS from 'csstype'

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

type Props = {
  disabled: boolean;
  label: string;
  users: User[];
  onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInput:React.FC<Props> = ({disabled, label, users, onSelect}) => {
  return (
    <div style={selectContainer}>
      <label htmlFor='textInput'>{label}</label>      
      <input disabled={disabled} id='textInput' list='userList' type='text' className='input' onChange={onSelect} placeholder='Digite o nome do usuário' />
      <datalist id='userList'>
        {users.map((user: User) => 
          <option key={user.id} value={user.first_name} />
        )}
      </datalist>
    </div>
  )
}

const selectContainer:CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default TextInput
