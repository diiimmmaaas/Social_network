import React from "react";
import styles from './Users.module.css'

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, pageSize, currentPage, ...props}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={styles.pagesCountOfUsers}>
            {pages.map(p => {
                // @ts-ignore
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={() => {props.onPageChanged(p)}}>{p}</span>
            })}
        </div>
    )
}