import EventOne from '../../lib/images/OurEvents/EventOne.jpg'
import EventTwo from '../../lib/images/OurEvents/EventTwo.jpg'
import EventThree from '../../lib/images/OurEvents/EventThree.jpg'

type OurEvents = {
  image: string;
  title: string;
  text: string;
};

const ourEvents: OurEvents[] = [
  {
    image: EventOne,
    title: "Lorem ipsun dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: EventTwo,
    title: "Lorem ipsun dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    image: EventThree,
    title: "Lorem ipsun dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];

export default ourEvents