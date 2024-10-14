"use client";

import { getCurrentWeatherByCity } from "@/api";
import Image from "next/image"
import { useState } from "react";

export const WeatherWidget = () => {
    const [searchCity, setSearchCity] = useState("");
    const [temperature, setTemperature] = useState(0);

    const verifyCurrentTemperature = async () => {
        const data = await getCurrentWeatherByCity(searchCity);
        setTemperature(data.main.temp);
    }

    return (
        <main className="min-h-screen w-screen bg-neutral-900 flex items-center justify-center">
            <article className="flex flex-col items-center gap-10">
                <form className="flex gap-2">
                    <label>
                        <input
                            onChange={(e) => setSearchCity(e.target.value)}
                            className="border rounded-md py-3 px-6 text-black"
                            type="text"
                            placeholder="Informe sua cidade..."
                        />
                    </label>
                    <button onClick={(e) => {
                        e.preventDefault();
                        verifyCurrentTemperature();
                    }} className="py-3 px-6 rounded-md bg-blue-600">Verificar</button>
                </form>
                <Image src="/viado2.png" alt="Sol Viado 2" width={300} height={300} />
                <h1 className="font-semibold text-xl">{temperature !== 0 ? `Temperatura ${temperature.toFixed(1)} ºC` : ""} </h1>
            </article>
        </main>
    )
}