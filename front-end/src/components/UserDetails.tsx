import React from 'react'
import './UserDetails.css'
import { FaArrowLeft } from "react-icons/fa";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

type Props = {
  user: User | undefined;
  backClickHandler: () => void;
}

const UserDetails:React.FC<Props> = ({ user, backClickHandler }) => {
  return (
    <div>
      <FaArrowLeft className="icon" onClick={backClickHandler}/>
      {user ? (
        <div className="infosContainer">
          <img className="avatar" src={user.avatar} alt='avatar' />
          <div>
            <h2>{user.first_name} {user.last_name}</h2>
            <h4>{user.email}</h4>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default UserDetails
