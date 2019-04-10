import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import Hello from "./components/Hello";
import { inject, observer } from "mobx-react";
import { ICounterStore } from "stores/CounterStore";

interface IProps {
    counterStore?: ICounterStore;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    }
});

@inject("counterStore")
@observer
export default class Main extends React.Component<IProps> {
    increment = () => {
        const { counterStore } = this.props;
        counterStore!.increment();
    };

    render() {
        const { counterStore } = this.props;
        return (
            <View style={styles.container}>
                <Text>Open up src/App.tsx to start working on your app!</Text>
                <Text>Using mobx to store states.</Text>
                <Hello
                    exclamation={
                        counterStore ? counterStore.exclamationMarks : ""
                    }
                />
                <Button title="Increment" onPress={this.increment} />
            </View>
        );
    }
}
