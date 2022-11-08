import "../styles/Scoreboard.css"
import axios from "axios"
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Scoreboard = () => {

    const [scores, setScores] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const getScores = async () => {
        setIsLoading(true)
        try {
            const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/api/scores`)
            setScores(data)
            setIsLoading(false)
        }catch(error){
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getScores()
    }, [])

    const board = scores.map((score, index) => {
        return(
            <p key={score._id}>{score.name} - {score.score}</p>
        )
    })


  return (
    <div className="scoreboard">
        <div className="top">
            <h1>Leaderboard</h1>
        </div>
        <div className="mid">
        <div className="scoreboard__container">
        {!isLoading ? 
        <>
            {scores.map((score, index) => {
                return(
                    <div className="leaders">
                        <h4 key={score._id}>{index + 1}. {score.name}</h4> 
                        <h4>{score.score}</h4>                       
                    </div>
                )
            })

            }
        </> 
        : <h4>Fetching Data...</h4> 
        }
        </div>
        </div>
        <div className="bottom">
        <Link className="retry__container2" to={"/"}>Play</Link>
        </div>
    </div>
  )
}

export default Scoreboard
