
import React from 'react'
import CardList from './CardList'
import styles from './assets/css/KanbanBoard.css'
import cards from './data.json';

const KanbanBoard = () => {
    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To Do'} cards={cards.filter(e => e.status === 'ToDo')}/>
            <CardList title={'In Progress'} cards={cards.filter(e => e.status === 'Done')}/>
            <CardList title={'Done CardList'} cards={cards.filter(e => e.status === 'Doing')}/>
        </div>
    )
}

export default KanbanBoard