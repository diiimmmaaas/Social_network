import React, {ComponentType, Suspense} from "react";


export function withSuspense<T>(Component: ComponentType<T>){
    return (props: T ) => {
        return <Suspense fallback={<div>Loading...</div>}><Component {...props as T}/></Suspense>
    }
}
