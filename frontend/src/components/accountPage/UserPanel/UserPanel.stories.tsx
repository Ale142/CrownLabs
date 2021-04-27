import UserPanel, { IUserPanelProps } from './UserPanel';
import { Story, Meta } from '@storybook/react';
import { someKeysOf } from '../../../utils';

export default {
  title: 'Components/UserPanel',
  component: UserPanel,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const defaultArgs: someKeysOf<IUserPanelProps> = {
  fullName: 'John Doe',
  username: 'john.doe@studenti.polito.it',
  email: 'john.doe@studenti.polito.it',
  studentID: 'S123456',
};

const Template: Story<IUserPanelProps> = args => <UserPanel {...args} />;

// export const CustomCSS = Template.bind({});

// CustomCSS.args = { ...defaultArgs};

// export const Disabled = Template.bind({});

// Disabled.args = { ...defaultArgs};

// export const Large = Template.bind({});

// Large.args = { ...defaultArgs};

export const Default = Template.bind({});

Default.args = defaultArgs;
