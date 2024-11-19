import One from '../../lib/images/LogosExample/Logo-1.png';
import Two from '../../lib/images/LogosExample/Logo-2.png';
import Three from '../../lib/images/LogosExample/Logo-3.png';
import Four from '../../lib/images/LogosExample/Logo-4.png';

type Logo = {
  [key: string] : string;
}

export const logos: Logo[] = [
  {One:  One},
  {Two: Two},
  {Three: Three},
  {Four: Four},
]