import axios from "axios";

const url = "http://localhost:5000/runs";

export const fetchRuns = () => axios.get(url);
export const createRun = (newRun) => axios.post(`${url}/add`, newRun);
export const updateRun = (id, run) => axios.post(`${url}/edit/${id}`, run);
export const deleteRun = (id) => axios.delete(`${url}/${id}`);