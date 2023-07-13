const knex = require("../database/knex");

class NotesController{
  async create(request, response) {
    const { title, description, rating, movie_tags } = request.body;
    const { user_id }  = request.params;

    const [note_id] = await knex("movie_notes").insert({
      title,
      description,
      rating,
      user_id
    });

    const tagsInsert = movie_tags.map(name => {
      return {
        user_id,
        note_id,
        name
      }
    });

    await knex("movie_tags").insert({tagsInsert});

    return response.json();
  }
}

module.exports = NotesController;
