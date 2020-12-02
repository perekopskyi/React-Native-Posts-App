import React, { useCallback, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { removePost, toggleBooked } from '../store/actions/post'
import { THEME } from '../theme'

export const PostScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const postId = navigation.getParam('postId')

  const post = useSelector((state) =>
    state.post.allPosts.find((p) => p.id === postId)
  )

  const booked = useSelector((state) =>
    state.post.bookedPosts.some((post) => post.is === postId)
  )
  useEffect(() => {
    navigation.setParams({ booked })
  }, [booked])

  const toggleHandler = useCallback(() => {
    dispatch(toggleBooked(post))
  }, [dispatch, post])

  useEffect(() => {
    navigation.setParams({ toggleHandler })
  }, [])

  const removeHandler = () => {
    Alert.alert('Delete post', 'Do you realy want to delete post?', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress() {
          navigation.navigate('Main')
          dispatch(removePost(postId))
        },
      },
    ])
  }

  if (!post) {
    return null
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
  const toggleHandler = navigation.getParam('toggleHandler')
  const iconName = booked ? 'ios-star' : 'ios-star-outline'
  return {
    headerTitle: `Post from ${new Date(date).toLocaleDateString()}`,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
        <Item title="Take photo" iconName={iconName} onPress={toggleHandler} />
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
