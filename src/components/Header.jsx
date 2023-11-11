import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { useState } from 'react'


const navItems = ['Home', 'About', 'Contact'];

function Header(props) {
  const { window } = props;
  const [setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


  return (
<div className='pb-1 '>

<nav class=" w-3/4  mx-40 rounded-full border-2 border-black   dark:bg-gray-900 bg-gradient-to-r from-yellow-200 via-green-200 to-green-500 ">
  <div className="max-w-screen-xl  flex flex-col justify-center  items-center  mx-auto  p-4"> 
    {/* <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a> */}
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
 
<div className=''>
    <div class="hidden w-full md:block md:w-auto " id="navbar-default">
      <ul className="flex flex-row gap-10 md:gap-4 md:font-sm font-serif">
        <li>
          <a href="#" className="text-2xl font-bold bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="text-2xl font-bold bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="font-bold text-2xl bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Placement</a>
        </li>
        <li>
          <a href="#" class="text-2xl font-bold bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">NAAC</a>
        </li>
        {/* <li>
          <a href="#" class="text-2xl font-bold bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Department</a>
        </li> */}
        <li class="relative group">
    <a href="#" class="text-2xl font-bold bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >
        Department 
    </a>
    <ul class="absolute hidden bg-white shadow-md mt-2 py-2 w-40 rounded-md group-hover:block">
        <li><a href="#" class=" px-4 py-2 text-gray-800 hover:bg-gray-200 bg-green-300 flex items-center justify-center">Computer</a></li>
        <li><a href="#" class=" px-4 py-2 text-gray-800 hover:bg-gray-200 bg-green-300 flex items-center justify-center">EnTC</a></li>
        <li><a href="#" class=" px-4 py-2 text-gray-800 hover:bg-gray-200 bg-green-300 flex items-center justify-center">Mechanical</a></li>
        <li><a href="#" class=" px-4 py-2 text-gray-800 hover:bg-gray-200 bg-green-300 flex items-center justify-center">AIML</a></li>
    </ul>
</li>


        <li>
          <a href="#" class="text-2xl font-bold bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Addmission</a>
        </li>
        <li>
          <a href="#" class="text-2xl font-bold bg-transparent block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Us</a>
        </li>
      </ul>
    </div>
    </div>
    </div>
    </nav>
</div>

  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;