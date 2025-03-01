import { useEffect, useState } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import "./Home.css";
import { Header } from "../Header/Header.jsx";
import playerStats from "./playerStats.json";
import Forest from "../../assets/forest.png";

export function Home() {
    const [playerData, setPlayerData] = useState({
        username: "Player",
        wins: 0,
        kills: 0,
        deaths: 0
    });
    const [message, setMessage] = useState("");

    useEffect(() => {
        setPlayerData(playerStats);

        const params = new URLSearchParams(window.location.search);
        const data = params.get("data");

        if (data) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(data));
                setPlayerData(parsedData);
            } catch (error) {
                console.error("Failed to parse player data:", error);
                setMessage("Failed to load player data");
            }
        }
    }, []);

    const barChartData = {
        series: [
            {
                data: [playerData.wins],
                color: '#f5f5f5',
                label: 'Wins'
            },
            {
                data: [playerData.kills],
                color: '#000000',
                label: 'Kills'
            },
            {
                data: [playerData.deaths],
                color: '#d3d3d3',
                label: 'Deaths'
            }
        ],
        xAxis: [{
            data: ["Stats"],
            scaleType: "band",
            tickLabelStyle: {
                fontFamily: 'Blasphemous',
                fontSize: 16,
                fill: "#f5f5f5"
            }
        }],
        yAxis: [{
            tickLabelStyle: {
                fontFamily: "Blasphemous",
                fontSize: 14,
                fill: "#f5f5f5"
            }
        }]
    };

    return (
        <div className="page" style={{ 
            backgroundImage: `url(${Forest})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}>
            <Header />
            <div className="title">
                <h1>{playerData.username}'s Stats</h1>
            </div>
            <div className="container">
                {message && <p className="error-message">{message}</p>}
                <div className="stats-box">
                    <p>My Performance</p>
                    <BarChart
                        {...barChartData}
                        height={290}
                        width={500}
                        margin={{ top: 50, bottom: 30, left: 40, right: 10 }}
                        sx={{
                            "& .MuiChartsAxis-line": {
                                stroke: "#f5f5f5"
                            },
                            "& .MuiChartsAxis-tick": {
                                stroke: "#f5f5f5"
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
}