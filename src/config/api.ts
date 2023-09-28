import axios from "axios";
const configValue: string = process.env.STRIPE_SECRET_KEY!;
export const api = axios.create({
headers: {
    Authorization: `Bearer ${configValue}`
},
    baseURL: "https://api.stripe.com/v1/"
});