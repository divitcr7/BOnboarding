import { useRef, useState, useMemo } from 'react';
import { Box, InputBase } from '@mui/material';
import * as BenchMarkIcons from '@benchmark-brokers/icons';
import { Grid } from '@/index';
import { Search } from '@mui/icons-material';

type IconType = keyof typeof BenchMarkIcons;

export function Icons() {
  const [searchText, setSearchText] = useState('');
  const iconNames: IconType[] = useRef(
    Object.keys(BenchMarkIcons) as IconType[]
  ).current;

  const filteredNames = useMemo(() => {
    return iconNames.filter((name) =>
      name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, iconNames]);

  return (
    <div>
      <Box
        sx={{
          p: '2px 4px',
          display: 'flex',
          alignItems: 'center',
          width: 400,
          mb: 3,
          backgroundColor: '#f1f1f1',
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search Icon By Name ..."
          onChange={(e) => setSearchText(e.target.value || '')}
        />
        <Search />
      </Box>
      <Grid spacing={2} container>
        {filteredNames.map((iconName) => {
          const IconComponent = BenchMarkIcons[iconName];
          return (
            <Grid key={iconName}>
              <Box
                sx={{
                  flexDirection: 'column',
                  display: 'flex',
                  alignItems: 'center',
                  padding: 2,
                  backgroundColor: '#f1f1f1',
                  borderRadius: 4,
                  width: 130,
                }}
              >
                <IconComponent color="#444" size="md" />
                <span style={{ paddingTop: 12, fontSize: 14 }}>{iconName}</span>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
