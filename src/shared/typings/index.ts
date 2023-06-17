export interface Customer {
    id: string;
    name: string;
    title: string;
    address: {
        street: string;
        city: string;
        state: string;
        zip: string;
        country: string;
    },
    avatar: string;
    imgHost: string;
    switchTime: number;
}