export interface Item {
    name: string;
    use: boolean;
}

export interface NamedAppData {
    name: string;
    items: Item[];
}

export interface AppData {
    items: Item[];
    candidate: string;
    selected: string;
    isDirty: boolean;
    namedAppData: NamedAppData[];
}
