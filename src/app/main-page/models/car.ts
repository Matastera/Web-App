import {Client} from './client';


export interface Car {
    id: number;
    marka: string;
    model: string;
    rokProdukcji: string;
    moc: number;
    cena: number;
    client:  Client;
    paliwo: string;
    przebieg: number;
}