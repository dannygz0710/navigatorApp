import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'>{}



export const PersonScreen = ({ route, navigation }:Props) => {

    const params = route.params
     
    useEffect(() => {
       
        navigation.setOptions({
           title: params.nombre 
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
           <Text style={styles.title}> PersonScreen</Text> 
        </View>
    )
}
