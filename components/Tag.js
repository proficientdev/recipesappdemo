import React from 'react';
import {View, Text, StyleSheet} from 'react-native';


const Tag = (props) => {
    return ( 
        <View style={[styles.tag, props.style]}>
            <Text style={{color:'white'}} >{props.text}</Text>
        </View>
     );
}

const styles = StyleSheet.create({
    tag:{
        height:32,
        borderRadius:5,
        backgroundColor:'grey',
    }
});
export default Tag;