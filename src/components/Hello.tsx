import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    root: {
        margin: 12,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontWeight: "bold",
        color: "red"
    }
});

interface IProps {
    exclamation: string;
}

export default class Hello extends React.Component<IProps> {
    render() {
        const { exclamation } = this.props;
        return (
            <View style={styles.root}>
                <Text style={styles.text}>Hello World{exclamation}</Text>
            </View>
        );
    }
}
