import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const AlbumDetail = (props) => {
    const { thumbnail_image, title, artist, image } = props.album;
    return (
        <View style={styles.cardContainerStyle}>
            <View style={styles.cardSectionStyle2}>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
                <Image
                    style={styles.thumbnailStyle}
                    source={{
                        uri: thumbnail_image
                    }}
                />
                <View style={styles.headerContentStyle}>
                    <Text style={styles.textstyle}>{title}</Text>
                    <Text style={styles.textstyle2}>{artist}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    thumbnailStyle: {
        height: 50,
        width: 50,
        margin: 5
    },
    headerContentStyle: {
        flexDirection: "column",
        justifyContent: "space-around",
        paddingLeft: 10
    },
    textstyle:{
        fontSize:16,
        fontWeight: "bold",
        color:"#fff"
    },
    textstyle2:{
        color:"#fff"
    },
    cardContainerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: "#A2AAE2",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    cardSectionStyle: {
        paddingBottom:15,
        paddingLeft:15,
        backgroundColor: "#150A4F",
        borderColor: "#fff",
    },
    cardSectionStyle2: {
        padding: 15,
        backgroundColor: "#150A4F",
        
    },
    imageStyle: {
        height: 350,
        width: null,
        borderRadius:20
    }
});

export default AlbumDetail;