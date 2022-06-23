import { Address } from "./Address"
import { Rider } from "./Rider"

export interface Delivery {
    id: number
    deliveryTimestamp: Date
    deliveryAddress: Address
    client: string
    courier: Rider
}