import http from "../http-common";

class OutfitDataService {
  getAll() {
    return http.get("/outfits");
  }

  get(id) {
    return http.get(`/outfits/${id}`);
  }


}

const OutfitData =  new OutfitDataService()

export default OutfitData;