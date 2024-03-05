import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import albumData from "../json/albums.json"
import AlbumDetail from "./AlbumDetail";

const Albumlist = () => {
    console.log('rendering AlbumList...');
    return (
        <ScrollView style={styles.scrollStyle}>
            <AlbumDetail album={albumData[0]} />
            <AlbumDetail album={albumData[1]} />
            <AlbumDetail album={albumData[2]} />
            <AlbumDetail album={albumData[3]} />
            <AlbumDetail album={albumData[4]} />
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scrollStyle: {
        backgroundColor: "#150A4F",
    },
    
});


export default Albumlist;