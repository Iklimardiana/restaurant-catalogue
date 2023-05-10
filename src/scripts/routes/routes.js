import ListResto from '../views/pages/list-resto';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ListResto,
  '/home': ListResto,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
