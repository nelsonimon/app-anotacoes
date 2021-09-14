import http from "./http-common";

class NoteDataService {
  getAll() {
    return http.get("/api");
  }

  get(id) {
    return http.get(`/api/${id}`);
  }

  create(data) {
    return http.post("/api", data);
  }

  update(id, data) {
    return http.put(`/api/${id}`, data);
  }

  delete(id) {
    return http.delete(`/api/${id}`);
  }

  // deleteAll() {
  //   return http.delete(`/api`);
  // }

  // findByTitle(title) {
  //   return http.get(`/api?title=${title}`);
  // }
}

export default new NoteDataService();