import { observable, action, computed } from "mobx";

export interface ICounterStore {
    count: number;
    exclamationMarks: string;
    increment(): void;
}

export default class CounterStore implements ICounterStore {
    @observable count = 0;

    @computed
    public get exclamationMarks() {
        return Array(this.count + 1).join("!");
    }

    @action.bound
    public increment() {
        this.count++;
    }
}
