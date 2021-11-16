import React from 'react'
import styles from './EventList.module.css'

export default function EventList({ events }){

    return (
        <div>
            {events && events.map((event, index) => (
                <div key={index} className={styles.card}>
                    <h2>{index} - {event.title}</h2>
                </div>
            ))}
        </div>
    )
}