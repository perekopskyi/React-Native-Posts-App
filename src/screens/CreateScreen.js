import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'

export const CreateScreen = (props) => {
  return (
    <View style={styles.center}>
      <Text>Create screen</Text>
    </View>
  )
}

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: 'Create post',
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
})
