import { light as lightGreen, dark as darkGreen } from './palette--green';
import { light as lightBlue, dark as darkBlue } from './palette--blue';
import { light as lightIndigo, dark as darkIndigo } from './palette--indigo';
import { light as lightPink, dark as darkPink } from './palette--pink';
import { light as lightOrange, dark as darkOrange } from './palette--orange';

const palette = (themeMode = 'dark', paletteType = 'pink') => {
  return themeMode === 'dark' ? darkPink : lightPink;
};

export default palette;
