import React from "react";
import{
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'

import {Feather} from '@expo/vector-icons'
import {MotiView, MotiText} from 'moti'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight +22 : 64;

export default function Header (){
    return(
        <View style={styles.container}>
            
            <View 
            style = {styles.content}>
                <Text style={styles.username}>Yuri Mendes</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color = '#FFF'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container:{
        paddingTop: StatusBarHeight,
        backgroundColor: '#1E90FF',
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
    },
    content:{
        flex:1,
        alignItems:  'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username:{
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold'

    },
    buttonUser:{
       width: 44,
       height: 44,
       backgroundColor: 'rgba(255,255,255, 0.5)',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 44/ 2,
    }
})