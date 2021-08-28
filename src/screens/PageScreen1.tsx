import { DrawerScreenProps } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
// import { StackScreenProps } from '@react-navigation/stack';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';


interface Props extends DrawerScreenProps<any, any> {};



export const PageScreen1 = ( { navigation }:Props ) => {

    useEffect(() => {
       
        navigation.setOptions({
            headerLeft: () => (
                <Button
                title='Menu'
                onPress={ () => navigation.toggleDrawer() }
                />
            )
        })
    }, [])
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page1</Text>
            <Button
              title="Go to page number two"
              onPress={ () => navigation.navigate('PageScreen2') }
              />

              <Text> Navegar con argumentos</Text>
              <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                   style={{
                  ...styles.bigBotton,
                  backgroundColor: '#5856d6'
                }}
                   onPress={ () => navigation.navigate('PersonScreen', {
                       id: 1,
                       nombre:'pedro'
                   }) }
                  >
                      <Text style={ styles.textBotton }>Pedro</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                        ...styles.bigBotton,
                        backgroundColor: '#ff9427'
                      }}
                   onPress={ () => navigation.navigate('PersonScreen', {
                       id: 2,
                       nombre:'Maria'
                   }) }
                  >
                      <Text style={ styles.textBotton }>Maria</Text>
                  </TouchableOpacity>
              </View>
           
            
        </View>
    )
}

