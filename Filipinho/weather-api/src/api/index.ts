import axios from "axios";

const api = axios.create();

// Consumir APIs com a solicitações GET, POST, PUT, PATCH, DELETE.

// Promises (Promessas)
// Asynchronous (Assíncrono)

export const getCurrentWeatherByCity = async (city: string) => {
    const request = await api.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=a62b93e034cf8acbcdb22d10a00a4dc0`);
    const response = await request.data;
    return response;
}