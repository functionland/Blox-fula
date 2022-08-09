import { Pool } from "../../spec/DTOs";
import * as Mock from "../mock"

// This is too hard for me to imagine!

interface PoolAPI {

    create(p: Partial<Pool>): Promise<boolean>

    join(poolId: string): Promise<boolean>

    getPools(): Promise<Pool[]>

    getPool(): Promise<Pool>
    
}


export const createPoolAPI = (): PoolAPI => {
    return {
        create: (_: Partial<Pool>): Promise<boolean> => Mock.mockPromise(true) ,
        join: (_: string): Promise<boolean> => Mock.mockPromise(true),
        getPools: (): Promise<Pool[]> => Mock.mockPromise(Mock.pools),
        getPool: (): Promise<Pool> => Mock.mockPromise(Mock.pools[0])
    }
}
