import React from 'react'
import { StyleSheet, Image } from 'react-native'

const Logo = () => {
  return (
    <Image
					source={{
						uri:
							'https://freshremote.work/media/company/logo/20/07/bitfinex.jpg'
					}}
					style={{ width: 'auto', height: '100%' }}
				    resizeMode='cover'
				/>
  )
}

export default Logo

const styles = StyleSheet.create({})
