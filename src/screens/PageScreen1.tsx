import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends StackScreenProps<any, any> {};



export const PageScreen1 = ( { navigation }:Props ) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page1</Text>
            <Button
              title="Go to page number two"
              onPress={ () => navigation.navigate('PageScreen2') }
              />

              <Text> Navegar con argumentos</Text>
              <TouchableOpacity
               onPress={ () => navigation.navigate('PersonScreen') }
              >
                  <Text>Pedro</Text>
              </TouchableOpacity>
            {/* <Button
              title="Go to person"
              onPress={ () => navigation.navigate('PersonScreen') }
              /> */}
            
        </View>
    )
}

