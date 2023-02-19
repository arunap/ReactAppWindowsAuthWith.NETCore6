import { Button, Stack } from 'react-bootstrap';
import axios from "axios";
import React, { useState } from 'react';

const initialState = { forecasts: [], loading: false }

export const ForecastItemList = () => {
    const [data, setData] = useState(initialState);

    const onClickedEvent = async () => {
        try {
            setData({ forecasts: [], loading: true });
            const response = await axios.get('http://localhost:5000/WeatherForecast', { withCredentials: true });
            setData({ forecasts: response.data, loading: false });

            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="Content">
            <Stack direction="horizontal" gap={2}>
                <Button as="a" variant="primary" onClick={onClickedEvent}>
                    {data.loading ? 'Loading forcast data...' : 'Get Weather Forecast'}
                </Button>
            </Stack>
            {!data.loading && data.forecasts && data.forecasts.map((item, idx) => {
                return <li key={idx}>{item.date} - {item.summary} temperatureC: {item.temperatureC}, temperatureF: {item.temperatureF}</li>
            })}

        </div>
    )
}
