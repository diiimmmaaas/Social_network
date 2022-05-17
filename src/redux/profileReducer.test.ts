import React from "react";
import {addPost, deletePost, profileReducer} from "./profileReducer";
import {v1} from "uuid";


let state = {
    postsData: [
        {id: v1(), message: "Hi, how are you?", likeCounts: 10},
        {id: v1(), message: "It's my first post", likeCounts: 30},
    ],
    profile: null,
    status: ''
}

test( 'new post should be added', () => {
    // 1. data
    let action = addPost('it-kamasutra')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData.length).toBe(3)
} )

test( 'new post should be corrected', () => {
    // 1. data
    let action = addPost('it-kamasutra')

    // 2. action
    let newState = profileReducer(state, action)

    // 3. expectation
    expect(newState.postsData[2].message).toBe('it-kamasutra')
} )


