import React from 'react';
import axios from 'axios';
import './App.css';
import CSS from 'csstype'
import Card from './components/Card';
import Select from './components/Select';
import UserDetails from './components/UserDetails';
import TextInput from './components/TextInput';
import TextDropInput from './components/TextDropInput';

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const App:React.FC = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [userDetails, setUserDetails] = React.useState<User | undefined>();
  const [isUserDetail, setIsUserDetail] = React.useState<boolean>(false);
  const [fade, setFade] = React.useState<CSS.Properties>({});

  React.useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://reqres.in/api/users');
        setUsers(response.data.data);
      } catch (error) {
        console.error('error', error);
      }
    }
    getUsers();
  },[]);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let index = Number(e.target.value)-1;
    setUserDetails(users[index]);
    
    navigate();
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const userFound = users.find(user => user.first_name.toLocaleLowerCase() === e.target.value.toLocaleLowerCase());
    if (userFound) {
      setUserDetails(userFound);
      navigate();
    }
  };
  const navigate = () => {
    setFade(fadeOut)
    setTimeout(() => {
      setIsUserDetail(true);
      setFade(fadeIn)
    }, 400);
  }
  const handleBackPress = () => {
    setFade(fadeOut)
    setTimeout(() => {
      setIsUserDetail(false);
      setFade(fadeIn)
    }, 400);
  }
  
  return (
    <div className='App' style={fade}>
      {!isUserDetail ? (
        <Card>
          <h1>Bem-vindo a busca de usuários</h1>
          {/* <Select label={'Usuários'} users={users} onSelect={handleSelectChange} /> */}
          <TextInput label={'Usuários'} users={users} onSelect={handleInputChange} />
          {/* <TextDropInput label={'Usuários'} users={users} /> */}
        </Card>
      ) : (
        <Card>
          <UserDetails user={userDetails} backClickHandler={handleBackPress} />
        </Card>
      )}
    </div>
  );
}

const fadeOut:CSS.Properties = {
  transition: 'opacity 0.4s',
  opacity: '0'
}
const fadeIn:CSS.Properties = {
  transition: 'opacity 0.4s',
  opacity: '1'
}

export default App;
