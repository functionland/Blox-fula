import { Blox, Tower, Device } from "../../spec/DTOs";
import * as Mock from "../mock"


interface DeviceAPI {

    getBlox(): Promise<Blox>

    setBlox(b: Partial<Blox>): Promise<boolean>
    
    getTower(id: string): Promise<Tower>

    getTowers(): Promise<Tower[]>
    
    setTower(t: Partial<Tower>): Promise<boolean>

    getExternalDevices(): Promise<Device[]>

    setDevice(d: Partial<Device>): Promise<boolean>

}

export const createDeviceAPI = (): DeviceAPI => {
    return {
        getBlox: (): Promise<Blox>=> Mock.mockPromise(Mock.blox) ,
        setBlox: (_: Partial<Blox>): Promise<boolean> => Mock.mockPromise(true),
        getTower: (id: string): Promise<Tower> => Mock.mockPromise(Mock.towers.filter((t)=> t.id === id)[0]),
        getTowers: (): Promise<Tower[]> => Mock.mockPromise(Mock.towers),
        setTower: (_: Partial<Tower>): Promise<boolean> => Mock.mockPromise(true),
        getExternalDevices: (): Promise<Device[]> => Mock.mockPromise(Mock.devices),
        setDevice: (_: Partial<Device>): Promise<boolean> => Mock.mockPromise(true)
    }
}

