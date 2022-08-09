
export function mockPromise<T>(value: T): Promise<T> {
    return new Promise((resolve, reject)=>{
        if(value === undefined || value === null){
            reject(`type of value not supported`)
        }
        resolve(value)
    })
}

export * from "./data"