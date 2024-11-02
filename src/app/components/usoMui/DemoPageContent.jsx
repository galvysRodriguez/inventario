import { renderPageContent } from "./RenderPageMenu";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export function DemoPageContent({ pathname}) {
    return (
      <Box
        sx={{
          py: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        {renderPageContent[pathname] || <Typography>Not content {pathname}</Typography>}
      </Box>
    );
  }