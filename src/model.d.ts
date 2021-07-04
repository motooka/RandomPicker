export interface Item {
    name: string;
    use: boolean;
}

export interface AppData {
    items: Item[];
    candidate: string;
    selected: string;
}
