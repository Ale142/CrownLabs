import { FC } from 'react';

export interface IUserInfoProps {
  fullName: string;
  username: string;
  email: string;
  studentID: string;
}

const UserInfo: FC<IUserInfoProps> = props => {
  const { fullName, username, email, studentID } = props;
  return (
    <>
      <h3>Personal</h3>
      <p>
        Full name: <strong>{fullName}</strong>
      </p>
      <h3>Login</h3>
      <p>
        Username: <strong>{username}</strong>
        <br />
        Password: <strong>••••••</strong>
      </p>
      <h3>University</h3>
      <p>
        Email: <strong>{email}</strong>
        <br />
        Student ID: <strong>{studentID}</strong>
      </p>
    </>
  );
};

export default UserInfo;
