import { styled } from '@mui/material';
import { useState } from 'react';
import { v4 } from 'uuid';
import Dropzone from 'react-dropzone';
import { Box, Typography, Button } from '@/index';

export interface DropZone {
  title: string;
  icon: React.ReactElement;
}

export function DropZone({ title, icon }: DropZone) {
  const [droppedFiles, setDroppedFiles] = useState<File[]>([]);
  const [dragEntered, setDragEntered] = useState<boolean>(false);

  return (
    <Box>
      <Dropzone
        onDrop={(acceptedFiles) => {
          setDroppedFiles([...droppedFiles, ...acceptedFiles]);
        }}
        onDragEnter={() => setDragEntered(true)}
        onDragLeave={() => setDragEntered(false)}
      >
        {({ getRootProps, getInputProps, open }) => (
          <MainContainer
            sx={{
              borderColor: dragEntered ? 'primary.main' : '',
            }}
          >
            {icon}
            <Box {...getRootProps()}>
              <input {...getInputProps()} />
              <Typography
                sx={{
                  pt: 2,
                }}
              >
                {title}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                mb: 1,
              }}
            >
              <Box
                sx={{
                  color: 'text.disabled',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  '&::before, &:after': {
                    content: '""',
                    display: 'inline-block',
                    height: '1px',
                    width: 60,
                    backgroundColor: 'text.disabled',
                    margin: 1,
                  },
                }}
              >
                OR
              </Box>
            </Box>
            <Button
              color="primary"
              onClick={open}
              size="small"
              variant="outlined"
            >
              Upload file
            </Button>
          </MainContainer>
        )}
      </Dropzone>
      <section>
        <ul>
          <h4>Files</h4>
          {droppedFiles.map((file) => (
            <li key={v4()}>
              {file.name} - {file.size} bytes
            </li>
          ))}
        </ul>
      </section>
    </Box>
  );
}

const MainContainer = styled('div')(({ theme }) => ({
  border: `1px dashed ${theme.palette.text.disabled}`,
  padding: theme.spacing(4),
  backgroundColor: theme.palette.surface.contrastDarkerText,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(1),
  boxSizing: 'border-box',
}));
