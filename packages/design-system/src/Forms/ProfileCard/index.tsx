import { styled } from '@mui/material';
import { Typography, IconLink, Avatar } from '@/index';
import { Phone, Mail, MessageCircle } from '@benchmark-brokers/icons';

export interface ProfileCardProps
  extends React.ComponentPropsWithoutRef<'button'> {
  title: string;
  subTitle: string;
  avatarImageUrl?: string;
  phoneClickHandler?: () => void;
  emailClickHandler?: () => void;
  chatClickHandler?: () => void;
}

export function ProfileCard({
  title,
  subTitle,
  avatarImageUrl,
  phoneClickHandler = () => {},
  emailClickHandler = () => {},
  chatClickHandler = () => {},
}: ProfileCardProps) {
  return (
    <MainContainer>
      <Avatar size="md" src={avatarImageUrl} border="md" />
      <Typography
        sx={{
          p: 1,
          typography: 'h5',
          color: 'info.contrastDarkerText',
          boxSizing: 'border-box',
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          p: 1,
          typography: 'body2',
          color: 'grey.200',
          boxSizing: 'border-box',
        }}
      >
        {subTitle}
      </Typography>
      <IconButtonContainer>
        <IconLink
          label="Phone"
          darkMode={true}
          onClick={phoneClickHandler}
          type="button"
          icon={<Phone />}
        />
        <IconLink
          label="Chat"
          darkMode={true}
          onClick={chatClickHandler}
          type="button"
          icon={<MessageCircle />}
        />
        <IconLink
          label="Email"
          darkMode={true}
          onClick={emailClickHandler}
          type="button"
          icon={<Mail />}
        />
      </IconButtonContainer>
    </MainContainer>
  );
}

const MainContainer = styled('div')(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)} ${theme.spacing(
    4
  )} ${theme.spacing(4)}`,
  border: 'none',
  backgroundColor: theme.palette.surface.dark,
  opacity: '90%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  boxSizing: 'border-box',
}));

const IconButtonContainer = styled('div')(({ theme }) => ({
  width: '100%',
  border: 'none',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  flexDirection: 'row',
  boxSizing: 'border-box',
  marginTop: theme.spacing(2),
}));
