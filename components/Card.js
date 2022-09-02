import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

const Card = (props) => {

  /** Styled Sheets */
  const styles = StyleSheet.create({
    card:{
      backgroundColor: props.backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      width: 110,
      height: 200,
      margin: 10,
      borderRadius: 10,
    },

    cardText:{
      color: '#FFF',
      fontSize: 20,
      margin: 15,
    },

    cardIcon:{
      color: '#FFF',
      margin: 15,
    },
  });


  /** Condition Icon View */
  const Icon = () => {
    if(props.icon === 'morning'){
      return (
        <FontAwesome5 name="cloud-sun" style={styles.cardIcon} size={40} color="orange" />
      )
    }

    if(props.icon === 'afternoon'){
      return (
        <Ionicons name="sunny-sharp" style={styles.cardIcon} size={40} color="orange" />
      )
    }

    if(props.icon === 'night'){
      return (
        <FontAwesome5 name="cloud-moon" style={styles.cardIcon} size={40} color="orange" />
      )
    }
  }


  /** Display Views */
  return (
    /** Periodic Card */
    <View style={styles.card}>
      <Text style={styles.cardText}>{props.title}</Text>
      <Icon></Icon>
      <Text style={styles.cardText}>{props.climate}</Text>
    </View>
  )

}

export default Card