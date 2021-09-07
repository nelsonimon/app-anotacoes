import http from "./http-common";

class NoteDataService {
  getAll() {
    return http.get("/note");
  }

  get(id) {
    return http.get(`/note/${id}`);
  }

  create(data) {
    return http.post("/note", data);
  }

  update(id, data) {
    return http.put(`/note/${id}`, data);
  }

  delete(id) {
    return http.delete(`/note/${id}`);
  }

  // deleteAll() {
  //   return http.delete(`/note`);
  // }

  // findByTitle(title) {
  //   return http.get(`/note?title=${title}`);
  // }
}

export default new NoteDataService();