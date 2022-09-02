import React from 'react';
import Card from './components/Card';
import InformationCard from './components/InformationCard';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function App() {

  /** Variables */
  const [darkTheme, setDarkTheme] = useState(true);
  const [currentClimate, setCurrentClimate] = useState('27');
  const [location, setLocation] = useState('Brasil, Rio de Janeiro');
  const [currentHour, setCurrentHour] = useState('11:28');
  const [wind, setWind] = useState('65');
  const [humidity, setHumidity] = useState('80');
  const [climateMin, setClimateMin] = useState('20');
  const [climateMax, setClimateMax] = useState('28');


  /** Styled Sheets */
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: darkTheme ? '#232634' : '#F2F2F2',
      alignItems: 'center',
    },

    hours:{
      color: darkTheme ? '#E0E0E0' : '#000',
      fontSize: 16,
      marginTop: 50,
      marginBottom: 10,
    },

    climate:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },

    climateText:{
      color: darkTheme ? '#E0E0E0' : '#000',
      fontSize: 46,
    },

    refreshButton:{
      position: 'absolute',
      alignSelf: 'flex-start',
      margin: 30,
    },

    cardContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: darkTheme ? '#000' : '#FFF',
      marginTop: 10,
      marginBottom: 20,
    },

    information:{
      alignItems: 'center',
      backgroundColor: darkTheme ? '#393E54' : '#8F8F8F',
      borderRadius: 20,
      width: 370,
      height: 230,
      marginBottom: 10,
    },

    informationCard:{
      flexDirection: 'row',
      flexWrap: 'wrap',
    },

    informationTitle:{
      color: darkTheme ? '#E0E0E0' : '#FFF',
      margin: 16,
      fontSize: 16,
    },

    themeButton:{
      justifyContent: 'center',
      width: 50,
      height: 50,
      margin: 10,
      marginLeft: 320,
      borderRadius: 25,
    },

    themeSelector:{
      justifyContent: 'center',
      backgroundColor: darkTheme ? '#F2F2F2' : '#8F8F8F',
      borderRadius: 25,
      width: 50,
      height: 20,
    },

    dotSelector:{
      backgroundColor: darkTheme ? '#232634' : '#F2F2F2',
      alignSelf: darkTheme ? 'flex-end' : 'flex-start',
      borderRadius: 50,
      margin: 1,
      width: 17,
      height: 17,
    }

  });


  /** Display Views */
  return (
    <View style={styles.container}>

      {/** Refresh Button */}
      <TouchableOpacity style={styles.refreshButton}>
        <Ionicons name="refresh" size={26} color={darkTheme ? '#FFF' : '#000'} />
      </TouchableOpacity>

      {/** Current Location */}
      <Text style={styles.hours}>{currentHour}</Text>

      {/** Current Climate */}
      <View style={styles.climate}>
        <FontAwesome5 name="cloud-sun" style={{marginRight: 10}} size={40} color="orange" />
        <Text style={styles.climateText}>{currentClimate}</Text>
        <Text style={[styles.climateText, {fontSize: 20}]}>°C</Text>
      </View>

      {/** Current Location */}
      <Text style={[styles.climateText, {fontSize: 16, marginBottom: 6}]}>{location}</Text>

      {/** Periodic Climate */}
      <View style={styles.cardContainer}>
        <Card 
          title={'Manhã'} 
          backgroundColor={darkTheme ? '#FF872D' : '#CC6E30'} 
          climate={'23°'}
          icon={'morning'}>
        </Card>

        <Card 
          title={'Tarde'} 
          backgroundColor={darkTheme ? '#D29600' : '#FCC63F'} 
          climate={'27°'}
          icon={'afternoon'}>
        </Card>

        <Card 
          title={'Noite'} 
          backgroundColor={darkTheme ? '#008081' : '#38B7B8'} 
          climate={'20°'}
          icon={'night'}>
        </Card>
      </View>

      {/** Additional Information */}
      <View style={styles.information}>
        <Text style={styles.informationTitle}> INFORMAÇÕES ADICIONAIS </Text>

        <View style={styles.informationCard}>

          <InformationCard title={'Vento'} value={wind + ' m/h'}></InformationCard>
          <InformationCard title={'Umidade'} value={humidity + '%'}></InformationCard>
          <InformationCard title={'Mínima'} value={climateMin + '°C'}></InformationCard>
          <InformationCard title={'Máxima'} value={climateMax + '°C'}></InformationCard>

        </View>
      </View>

      {/** Button Change Theme */}
      <View style={styles.themeButton}>
        <View style={styles.themeSelector}>
          <TouchableOpacity 
            style={styles.dotSelector}
            onPress={() => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}
          >
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}