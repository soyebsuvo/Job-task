import axios from "axios"

const axiosSecure = axios.create({
    baseURL : 'https://job-assignment-server.vercel.app'
})
export default function useAxiosSecure() {
  return axiosSecure;
}
