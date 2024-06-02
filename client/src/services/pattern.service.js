import http from "../http-common";

class PatternDataService {
  getAll() {
    return http.get("/patterns");
  }

  get(id) {
    return http.get(`/patterns/${id}`);
  }


}

const PatternData = new PatternDataService()

export default PatternData;