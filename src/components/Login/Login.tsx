import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import { requiredField } from '../../utils/validators/validators';
import { Input } from '../FormControls/FormControls';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'}
                       name={'login'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       name={'password'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                       name={'rememberMe'}
                       component={Input}
                /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)