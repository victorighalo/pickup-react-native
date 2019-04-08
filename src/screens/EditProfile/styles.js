import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    themeBg : {
        backgroundColor:'#ececec'
    },
    bgImage: {
        flex: 1,
        top: 0,
        left: 0,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
    },
    title: {
        textAlign: 'center',
        fontSize:18,
        color:'#000'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:20
    },
    profileBioDataContainer: {
        justifyContent: "space-around",
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10,
        flexDirection: "row",
        alignItems: 'center'
    },
    profileDetailsContainer:{
        padding:20,
    },
    profileDetailsItemDark:{
        padding:7,
        backgroundColor:'#26247B',
        alignItems:'center',
        justifyContent: "center",
        flexDirection: "row",
    },
    profileDetailsItemLight:{
        padding:7,
        backgroundColor:'transparent',
        alignItems:'center',
        justifyContent: "center",
        flexDirection: "row",
    },
    profileName: {
        fontSize:26,
        color: '#000'
    },
    profile_key: {
        color: '#000',
        fontWeight: 'bold'
    },
    profile_value: {
        color: '#333'
    },
    bottomActions: {
        justifyContent: "space-around",
        alignItems: 'flex-end',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:10,
        paddingBottom:10,
        flexDirection: "row"
    },
    bottomActionsContainer: {
        justifyContent: "flex-end",
        flexDirection: "column"
    },
    modal:{
        flex:1,
        backgroundColor: "#fff",
        justifyContent:'flex-start',
        alignItems:'center',
        flexDirection: 'column'
    },
    menuBtnContainer: {
        justifyContent:'flex-end',
        alignItems:'center',
        backgroundColor: 'white',
        flexDirection:'column',
        marginTop:20
    },
    row:{
        flexDirection: "row",
        justifyContent:'center',
        alignItems:'center',
    } ,
    column:{
        flexDirection: "column",
    }
});

export default styles;