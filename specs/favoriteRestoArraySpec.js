/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteResto = [];

const FavoriteRestoArray = {
  getResto(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line eqeqeq
    return favoriteResto.find((resto) => resto.id == id);
  },

  getAllResto() {
    return favoriteResto;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteResto
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteResto.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus restaurant dengan meng-copy restaurant yang ada
    // kecuali restaurant dengan id == id
    // eslint-disable-next-line eqeqeq
    favoriteResto = favoriteResto.filter((resto) => resto.id != id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteResto = []);

  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});
