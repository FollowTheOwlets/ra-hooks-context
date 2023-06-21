export interface Person {
    id: number;
    name: string;
}

export interface PersonInfo {
    id: number;
    name: string;
    avatar: string;
    details: {
        city: string;
        company: string;
        position: string;
    }
}