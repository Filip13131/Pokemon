import { View, StyleSheet, TouchableOpacity} from "react-native";

export function HeartIcon(_props: {isFilled: boolean}){
    const _onPress = () =>{
        console.log("you pressed heart icon!");
    }

    return(
        <View style={styles.icon}>
            <TouchableOpacity onPress={_onPress} style={{flex:1}}>
                <View></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    icon :{
        position: "absolute",
        display:"flex",
        right: 15,
        top:15,
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 20,
        width: 40,
        height: 40,
    }
})