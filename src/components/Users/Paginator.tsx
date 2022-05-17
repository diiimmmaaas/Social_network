import React, { useState } from "react";
import styles from './Users.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage,  ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / pageSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * pageSize +1
    let rightPortionPageNumber = portionNumber * pageSize


    return (
        <div className={styles.pagesCountOfUsers}>
            {portionNumber > 1 &&
                <button onClick={ () => {setPortionNumber(portionNumber - 1)} }>PREV</button> }

            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                // @ts-ignore
                return <span className={currentPage === p && styles.selectedPage}
                             key={p}
                             onClick={() => {props.onPageChanged(p)}}>{p}</span>
            })}

            {portionCount > portionNumber &&
            <button onClick={ () => {setPortionNumber(portionNumber + 1)} }>NEXT</button>}
        </div>
    )
}