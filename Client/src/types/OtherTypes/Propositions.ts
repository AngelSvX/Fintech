import posts from '../../lib/icons/PropositionIcons/posts.png';
import events from '../../lib/icons/PropositionIcons/events.png';
import capacity from '../../lib/icons/PropositionIcons/capacity.png';
import projects from '../../lib/icons/PropositionIcons/proyects.png';

type Proposition = {
  icon: string,
  title: string,
  text: string,
}

export const propositions: Proposition[] = [
  {
    icon: posts, // Ya estás usando la variable importada correctamente
    title: 'Publicaciones y estudios',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: projects,
    title: 'Iniciativas y proyectos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: capacity,
    title: 'Formación de capacidades',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: events,
    title: 'Eventos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];