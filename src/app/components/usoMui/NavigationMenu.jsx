import Link from 'next/link';
import { useRouter } from 'next/router';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const NAVIGATION = [
    {
      segment: 'Inicio',
      title: 'Inicio',
      href: '/',
    },
]

function NavigationMenu() {
  const router = useRouter();

  const handleNavigation = (href) => {
    router.push(href);
  };

  return (
    <List>
      {NAVIGATION.map((navItem) => (
        <ListItem
          button
          key={navItem.segment}
          onClick={() => handleNavigation(navItem.href)}  // Redirigir manualmente
        >
          <ListItemText primary={navItem.title} />
        </ListItem>
      ))}
    </List>
  );
}

export default NavigationMenu;
