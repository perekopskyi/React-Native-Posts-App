import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageBackground from 'react-native/Libraries/Image/ImageBackground'

export const Post = ({ post, onOpen }) => {
  const { img, date } = post
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={styles.post}>
        <ImageBackground style={styles.image} source={{ uri: img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular',
  },
})
