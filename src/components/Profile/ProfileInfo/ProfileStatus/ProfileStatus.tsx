import React, {ChangeEvent, useState } from 'react'

type ProfileStatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false
    }
    activateEditMode () {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode () {
        this.setState({
            editMode: false
        })
    }
    // let [editMode, setEditMode] = useState(false)
    //
    // const changeEditMode = () => {
    //     setEditMode(!editMode)
    // }
    //
    // const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    //     let value = event.currentTarget.value
    //     console.log(event.currentTarget.value)
    // }
    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                    : <input autoFocus onBlur={this.deactivateEditMode.bind(this)} value={this.props.status}/>
                }
            </div>
        )
    }
}