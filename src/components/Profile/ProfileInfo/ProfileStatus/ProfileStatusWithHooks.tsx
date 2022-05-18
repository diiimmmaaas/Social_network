import React, {ChangeEvent, useEffect, useState} from 'react'
import { ThunkType } from '../../../../redux/reduxStore'



type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => ThunkType
}

export const ProfileStatusWithHooks = (props: ProfileStatusPropsType) => {
    const [editMode, seEditMode]= useState<boolean>(false)
    const [status, setStatus]= useState(props.status)

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] )

    const activateEditMode = () => {
        seEditMode(true)
    }

    const onStatusChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    const deactivateEditMode = () => {
        seEditMode(false)
        props.updateUserStatus(status)
    }

    return (
        <div>
            {!editMode
                ? <span onDoubleClick={activateEditMode}>{props.status || "No status"}</span>
                : <input onChange={onStatusChange} autoFocus onBlur={deactivateEditMode}
                         value={status}/>
            }
        </div>
    )
}