import { View, StyleSheet, Button } from "react-native";



export function NavigationBar( ){
    const logWhenClicked = () : void => {
        console.log("hello!!");
    }

    return(
        <View style = {styles.navigationBar}>
            <Button
                onPress={logWhenClicked}
                title="FavoriteView"
                color="#841584"
                accessibilityLabel="Navigate to favorite view."
            />
            <Button
                onPress={logWhenClicked}
                title="ListView"
                color="#841584"
                accessibilityLabel="Navigate to list view."
            />
            <Button
                onPress={logWhenClicked}
                title="MapView"
                color="#841584"
                accessibilityLabel="Navigate to map view."
            />
        </View>
    );

} 

const styles = StyleSheet.create({
    navigationBar : {
        justifyContent: "center",
        flexDirection: "row",
        height: 50,
        width: "100%",
        bottom: 0,
        display: "flex",


    }
})