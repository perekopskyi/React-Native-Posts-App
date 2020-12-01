import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Это лучшее приложение для тренировки в React Native</Text>
      <Text>
        Версия приложения <Text style={styles.bold}>1.0.0</Text>
      </Text>
    </View>
  )
}

AboutScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'About application',
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toggle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
})

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bold: {
    fontFamily: 'open-bold',
  },
})
