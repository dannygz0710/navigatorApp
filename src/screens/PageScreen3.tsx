import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'


interface Props extends StackScreenProps<any, any> {};

export const PageScreen3 = ({ navigation }: Props) => {
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page3</Text>

            <Button
              title='Go back'
              onPress={ ()=> navigation.pop()}
              />
            <Button
              title='Go to Home'
              onPress={ ()=> navigation.popToTop()}
              />
            
        </View>
    )
}
