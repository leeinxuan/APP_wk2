import React from "react";
import { StyleSheet, Image, View } from "react-native";

const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Image
                style={styles.headerImgStyle}
                source={{
                    uri: "https://fontmeme.com/images/set-in-yasashi-bold-font.png"
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        height: 60,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        // Android Only
        elevation: 2,
    },
    textStyle: {
        fontSize: 20,
    },
    headerImgStyle:{
        height:57,
        width:150,
    }
});

export default Header;