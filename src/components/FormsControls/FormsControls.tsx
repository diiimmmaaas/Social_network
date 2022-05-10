import React from "react";
import styles from './FormsControls.module.css'


// @ts-ignore
export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <textarea {...props} {...input}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

// @ts-ignore
export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                <input {...props} {...input}/>
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}