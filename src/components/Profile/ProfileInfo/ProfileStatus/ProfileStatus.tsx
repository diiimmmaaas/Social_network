import React, {ChangeEvent} from 'react'
import { ThunkType } from '../../../../redux/reduxStore'


type ProfileStatusPropsType = {
    status: string
    updateUserStatus: (status: string) => ThunkType
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            <div>
                {!this.state.editMode
                    ? <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status"}</span>
                    : <input onChange={this.onStatusChange} autoFocus onBlur={this.deactivateEditMode}
                             value={this.state.status}/>
                }
            </div>
        )
    }
}