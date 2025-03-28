import GoogleMapReact from 'google-map-react';
import { Home } from '@benchmark-brokers/icons';
import mapStyle from './googleMapStyle';
import { styled, Theme, SxProps } from '@mui/material';

export interface GoogleMapProps {
  lat: number;
  lng: number;
  sx?: SxProps<Theme>;
  mapOptions?: GoogleMapReact.MapOptions;
}

export function GoogleMap({ lat, lng, sx, mapOptions }: GoogleMapProps) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';
  const defaultMapSettings = {
    center: {
      lat: lat,
      lng: lng,
    },
    zoom: 15,
  };
  return (
    <Container sx={{ ...sx }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={defaultMapSettings.center}
        defaultZoom={defaultMapSettings.zoom}
        options={{
          styles: mapStyle,
          fullscreenControl: false,
          panControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          zoomControl: false,
          draggable: false,
          ...mapOptions,
        }}
      >
        <HomePin lat={lat} lng={lng}>
          <Home className="iconStyle" />
        </HomePin>
      </GoogleMapReact>
    </Container>
  );
}

const Container = styled('div')({
  width: '100%',
  height: '20rem',
  'a[href^="http://maps.google.com/maps"]': {
    display: 'none !important',
  },
  'a[href^="https://maps.google.com/maps"]': {
    display: 'none !important',
  },
  '.gmnoprint a, .gmnoprint span, .gm-style-cc': {
    display: 'none',
  },
  '.gmnoprint div': {
    background: 'none !important',
  },
});

const HomePin = styled('div')<GoogleMapProps>(({ theme }) => ({
  width: theme.spacing(6),
  height: theme.spacing(6),
  backgroundColor: 'white',
  display: 'inline-flex',
  textAlign: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '100%',
  border: `2px solid ${theme.palette.secondary.main}`,
  '& .iconStyle': {
    fill: theme.palette.secondary.main,
  },
}));
