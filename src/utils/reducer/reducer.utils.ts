export type ActionWithPayload<T,P> = {
    type: T;
    payload: P
}

export type Action<T> = {
    type: T;
}

// Function overloads
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T,P>

export function createAction<T extends string>(type: T, payload: void): Action<T>

// Function implementation
export function createAction<T extends string, P>(type: T, payload: P): any {
    return { type, payload }
}
