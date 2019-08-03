import { BASE_URL } from "../config";

const Review = {
  create(trainer_id) {
    return fetch(`${BASE_URL}/trainers/${trainer_id}/reviews`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
  delete(trainer_id, review_id) {
    return fetch(`${BASE_URL}/trainers/${trainer_id}/reviews/${review_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
    }).then(res => res.json());
  },
}

export default Review;
