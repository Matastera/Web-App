import {Client} from './client';


export interface Car {
    id: number;
    model: string;
    plate: string;
    deliveryDate: string;
    deadline: string;
    cost: number;
    isFullyDamaged: boolean;
    client:  Client;
}