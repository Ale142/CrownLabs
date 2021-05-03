import { FC } from 'react';

export interface IUserInfoProps {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

const UserInfo: FC<IUserInfoProps> = props => {
  const { firstName, lastName, username, email } = props;
  return (
    <>
      <h3>Personal</h3>
      <p>
        First name : <strong>{firstName}</strong>
      </p>
      <p>
        Last name : <strong>{lastName}</strong>
      </p>
      <h3>Login</h3>
      <p>
        Username: <strong>{username}</strong>
      </p>
      <h3>University</h3>
      <p>
        Email: <strong>{email}</strong>
      </p>
    </>
  );
};

export default UserInfo;
