import publicaciones from '../../lib/images/Propost/Publicaciones.jpg'
import proyectos from '../../lib/images/Propost/projects.jpg'
import capacitaciones from '../../lib/images/Propost/capacitacion.jpg'
import eventos from '../../lib/images/Propost/events.jpg'

type usPropositions = {
  image: string,
  title: string,
  text: string,
  link: string,
}

export const usPropositions: usPropositions[] = [
  {
    image : publicaciones,
    link : 'posts',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title : 'Publicaciones'
  },
  {
    image : proyectos,
    link : 'projects',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title : 'Proyectos'
  },
  {
    image : capacitaciones,
    link : 'capacitation',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title : 'Capacitaciones'
  },
  {
    image : eventos,
    link : 'events',
    text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title : 'Eventos'
  }
]

