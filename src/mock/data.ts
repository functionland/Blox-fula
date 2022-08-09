import { 
    Blox,
    Tower, 
    TowerType, 
    Device, 
    DeviceType, 
    User, 
    Pool,
    L2BlockChainType,
    Friend
} from "../../spec/DTOs"

export const user: User = {
    connectionDate: "",
    decentralizedId: "did:fula:key1",
    imageUrl:"/ipfs/qwpoiej;lkmvxz.cv,cxvcx",
    username: "i don't think we can have this one", 
    peerId: ["a;skdfljsdc", "as;kdljfas;kdlf"],
    securityPassphrase: "",
    walletId: "asdfasdfsdfsdfs"
}

export const blox: Blox = {
    id: "123",
    totalStorage: 1e+10,
    poolAllocation: 1e+2,
    usageStats: [
        {
            decentralizedId: "did:fula:key1",
            storage: 1024
        },
        {
            decentralizedId: "did:fula:key2",
            storage: 2048
        }
    ],
    poolId: "3216548",
    towers: ["asd435","asd123"]
}

export const towers: Tower[] = [
    {
        id: "asd435",
        name: "Sege",
        poolId: "3216548",
        settings: {
            brightness: 5,
            color: "blue"
        },
        storageTotal: 1e+2,
        userStorageAllocation: [
            {
                decentralizedId: "did:fula:key1",
                consumed: 256,
                allocated: 512
            },
            {
                decentralizedId: "did:fula:key2",
                consumed: 256,
                allocated: 512
            }
        ],
        type: TowerType.Fula
    },
    {
        id: "asd123",
        name: "Soote",
        poolId: "3216548",
        settings: {
            brightness: 5,
            color: "red"
        },
        storageTotal: 1e+2,
        userStorageAllocation: [
            {
                decentralizedId: "did:fula:...",
                consumed: 256,
                allocated: 512
            },
            {
                decentralizedId: "did:fula:...",
                consumed: 256,
                allocated: 512
            }
        ],
        type: TowerType.Storage
    }
]

export const devices: Device[] = [{
    associatedTower: "asd435",
    isSyncing: false,
    name: "sandisk",
    storageTotal: 1e+10,
    type: DeviceType.Disk
}]


export const pools: Pool[] = [
    {
        count: 1,
        id: "fulapool1234",
        isPublic: true,
        location: [1,1],
        name: "fulapool",
        requirements: {
            storage: 1e+1,
            ping: 500,
            range: 5 * 1000
        },
        type: L2BlockChainType.Polkadot

    },
    {
        count: 1,
        id: "fulapool1236",
        isPublic: true,
        location: [2,2],
        name: "fulapool2",
        requirements: {
            storage: 1e+1,
            ping: 100,
            range: 1 * 1000
        },
        type: L2BlockChainType.Polkadot

    }
]

export const friends: Friend[] = [
    {
        status: "accepted",
        connectionDate: "",
        decentralizedId: "did:fula:key3",
        imageUrl: "/pic/2.jepg",
        username: "lofi",
        peerId: ["asdfasdfasdf","asfasdfasfdsfd"]
    },
    {
        status: "invited",
        connectionDate: "",
        decentralizedId: "did:fula:key4",
        imageUrl: "/pic/3.jepg",
        username: "guko",
        peerId: ["asdfasdfasdf","asfasdfasfdsfd"]
    }
]