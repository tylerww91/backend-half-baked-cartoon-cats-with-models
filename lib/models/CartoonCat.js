const pool = require('../utils/pool');
module.exports = class CartoonCat {
  // TODO -- fill in this class!
  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.type = row.type;
    this.lives = row.lives;
    this.url = row.url;
    this.year = row.year;
    this.isSidekick = row.is_sidekick;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from cartoon_cats');
    console.log(rows);
    return rows.map((catRow) => new CartoonCat(catRow)); //*returns rows
  }
};
