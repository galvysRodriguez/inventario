import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';

export function SkeletonDatagrid(){
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '2rem', 
                  height: 800, width: 600, maxWidth: '80vw' }}>
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} variant="rectangular" height={52} sx={{ mb: 1 }} />
          ))}
        </Box>
    )
}