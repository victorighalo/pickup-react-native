import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize:18,
        color:'white'
    },
    titleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding:5,
        backgroundColor:'#26247B'
    },
    bottomActions: {
        flex:1,
        justifyContent: "space-around",
        alignItems: 'flex-end',
        flexDirection: "row",
        paddingTop:40,
        paddingBottom:10,
        backgroundColor: 'transparent'
    },
    friendsList: {
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection: "row",
        paddingBottom:15,
        paddingTop:15,
    },
    friendsListName: {
        flexDirection: "row",
        justifyContent: 'space-around',
        alignItems:'center',
        flex:1
    },

    friendsListRight:{
        flex:1,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems:'center',
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 10,
    },
    friendsListLeft:{
        padding:10
    },
    tableHead: {
        backgroundColor:'#ececec',
        justifyContent: 'center',
        flexDirection:'row'
    },
    checkProfile:{
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems:'center'
    },
    wifi:{
        flex: 1,
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignItems:'center'
    },
    avatar:{
        width: 50,
        height: 50,
        resizeMode: 'contain',
        alignItems:'center'
    },
    desc:{
        color: '#333',
        fontSize:12
    }
});

export default styles;