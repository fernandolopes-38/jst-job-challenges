import React from 'react'
import './Select.css'
import CSS from 'csstype'

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
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const Select:React.FC<Props> = ({label, users, onSelect}) => {
  return (
    <div style={selectContainer}>
      <label htmlFor='usersSelect'>{label}</label>
      <div className='select'>
        <select id='usersSelect' onChange={onSelect}>
          <option value='0'>Selecione o usuário</option>
          {users.map((user: User) => 
            <option key={user.id} value={user.id} >{user.id} - {user.first_name}</option>
          )}
        </select>
      </div>
    </div>
  )
}

const selectContainer:CSS.Properties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

export default Select;
