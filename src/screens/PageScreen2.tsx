import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';






export const PageScreen2 = () => {

   const navigator = useNavigation();

   useEffect(() => {
      navigator.setOptions({
          title: 'Hola Mundo',
          headerBackTitle: ''
      })
   }, [])
    return (
        <View style={styles.globalMargin}> 
            <Text style={styles.title}>Page2</Text>

            <Button
            title="Go to page Three"
            onPress={ () => navigator.dispatch(
                CommonActions.navigate({name: 'PageScreen3',})
            ) }
            />
            
        </View>
    )
}
