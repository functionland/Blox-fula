import { createDeviceAPI } from "./api/Device";
import { createPoolAPI } from "./api/Pool";
import { createUserAPI } from "./api/User";

export const BloxAPI = {
    Devices: createDeviceAPI(),
    Pools: createPoolAPI(),
    Users: createUserAPI()
}
