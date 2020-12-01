import React, { useEffect } from 'react'
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { DATA } from '../data'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const postId = navigation.getParam('postId')

  const post = DATA.find((p) => p.id === postId)

  // useEffect(() => {
  //   navigation.setParams({ booked: post.booked })
  // }, [])

  const removeHandler = () => {
    Alert.alert('Delete post', 'Do you realy want to delete post?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => {} },
    ])
  }

  return (
    <ScrollView>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({ navigation }) => {
  const date = navigation.getParam('date')
  const booked = navigation.getParam('booked')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item
          title="Take photo"
          iconName={iconName}
          onPress={() => console.log('press photo')}
        />
      </HeaderButtons>
    ),
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',
  },
})
