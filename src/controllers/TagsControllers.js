const knex = require("../database/knex");

class TagsController {
  async index(resquet, response) {
    const { user_id } = resquet.params;

    const tags = await knex("movie_tags")
    .where({ user_id })

    return response.json(tags);

  }
}

module.exports = TagsController;
