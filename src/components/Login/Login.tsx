import React from 'react'
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requiredField} from '../../utils/validators/validators';
import {Input} from '../FormControls/FormControls';
import {connect} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {RootStoreType} from "../../redux/reduxStore";
import { Navigate } from 'react-router-dom';
import styles from '../FormControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginPropsType = {
    login: (email: string,
            password: string,
            rememberMe: boolean) => void
    isAuth: boolean
}


const Login = (props: LoginPropsType) => {
    const onSubmit = (formData: FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate  to={"/profile/"}/>
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: RootStoreType) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)


export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'}
                       name={'email'}
                       component={Input}
                       validate={[requiredField]}
                />
            </div>
            <div>
                <Field placeholder={'Password'}
                       type={"password"}
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
            {props.error &&  <div className={styles.formSummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)