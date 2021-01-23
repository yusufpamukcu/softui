import React, { Component } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image, StatusBar } from 'react-native';
import Slider from "react-native-slider";
import Icon from 'react-native-vector-icons/AntDesign';
import { NeomorphBlur, Neomorph, NeomorphFlex } from 'react-native-neomorph-shadows';
import LinearGradient from 'react-native-linear-gradient';


const NeuMorph = ({ children }) => {
  return (
    <Neomorph
      inner={true} // <- enable shadow inside of neomorph
      swapShadows // <- change zIndex of each shadow color
      style={{
        shadowRadius: 5,
        borderRadius: 25,
        shadowColor: "#2A2E34",
        backgroundColor: '#282A2F',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <NeomorphBlur
        style={{
          shadowRadius: 12,
          borderRadius: 30,
          backgroundColor: '#1B2125',
          width: 43,
          height: 43,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {children}
      </NeomorphBlur>
    </Neomorph>
  )
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.2
    };
    Icon.loadFont()
  }



  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#343A3E', '#191A1E', '#191A1E']} style={{ flex: 1, width: '100%' }}>


          <StatusBar translucent backgroundColor="transparent" />
          <SafeAreaView style={styles.safe}>
            <View style={styles.space}>

              {/* /////////////////////////////////////////////////// */}
              {/* header */}
              <View style={styles.topContainer}>
                <NeuMorph>
                  <Icon name="arrowleft" size={15} color="#838789" />
                </NeuMorph>
                <Text style={styles.text}>Soft UI</Text>
                <NeuMorph>
                  <Icon name="menu-fold" size={15} color="#838789" />
                </NeuMorph>
              </View>
              {/* /////////////////////////////////////////////////// */}



              {/* /////////////////////////////////////////////////// */}
              {/* görsel alanı */}
              <View style={styles.body}>
                <Neomorph
                  style={{
                    shadowRadius: 3,
                    borderRadius: 130,
                    backgroundColor: '#1E2327',
                    width: 260,
                    height: 260,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Neomorph
                    style={{
                      shadowRadius: 7,
                      borderRadius: 130,
                      backgroundColor: '#2A2E34',
                      width: 260,
                      height: 260,
                    }}
                  >
                    <Image
                      style={styles.image}
                      source={{ uri: 'https://img.discogs.com/S5MkQQJRbmIxtcQMGxF29CyL838=/fit-in/400x400/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2578540-1291397561.jpeg.jpg' }}
                    />
                  </Neomorph>
                </Neomorph>
              </View>
              {/* /////////////////////////////////////////////////// */}


              {/* /////////////////////////////////////////////////// */}
              {/* playlist alanı */}
              <View style={styles.space}>
                <View style={{ alignItems: 'center' }}>

                  <Text style={styles.textTitle}>Manga</Text>
                  <Text style={styles.text}>Could be the same</Text>
                </View>

                <View style={styles.topContainer}>
                  <Text style={styles.textNote}>0.53</Text>
                  <Text style={styles.textNote}>3.41</Text>
                </View>

                <Slider
                  trackStyle={iosStyles.track}
                  thumbStyle={iosStyles.thumb}
                  value={this.state.value}
                  onValueChange={value => this.setState({ value })}
                  minimumTrackTintColor='#E56714'
                  maximumTrackTintColor='#1B2125'
                />
              </View>
              {/* /////////////////////////////////////////////////// */}



              {/* /////////////////////////////////////////////////// */}
              {/* kontrol alanı */}
              <View style={styles.space}>
                <View style={styles.topContainer}>
                  <NeuMorph>
                    <Icon name="banckward" size={20} color="#85878A" />
                  </NeuMorph>
                  <Neomorph
                    inner={true} // <- enable shadow inside of neomorph
                    swapShadows // <- change zIndex of each shadow color
                    style={{
                      shadowRadius: 4,
                      borderRadius: 40,
                      backgroundColor: '#E56714',
                      width: 80,
                      height: 80,
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon name="pause" size={30} color="#fff" />
                  </Neomorph>
                  <NeuMorph>
                    <Icon name="forward" size={20} color="#85878A" />
                  </NeuMorph>
                </View>
              </View>
              {/* /////////////////////////////////////////////////// */}


            </View>
          </SafeAreaView>
        </LinearGradient>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2C2D2F'
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  safe: {
    alignSelf: 'stretch'
  },
  space: {
    marginHorizontal: 32,
    marginTop: 32
  },
  textTitle: {
    color: '#A7A8AA',
    fontSize: 24
  },
  text: {
    color: '#838789',
    fontSize: 14
  },
  textNote: {
    color: '#838789',
    fontSize: 9
  },
  body: {
    marginVertical: 30,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 130,
    borderColor: '#1B2125',
    borderWidth: 10
  }
})

// slider buton tarımını
var iosStyles = StyleSheet.create({
  track: {
    height: 7,
    borderRadius: 4,
    backgroundColor: '#2A2E34',
    borderColor: '#141819',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.15,
  },
  thumb: {
    width: 30,
    height: 30,
    backgroundColor: '#E56714',
    borderColor: '#2A2E34',
    borderWidth: 7,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
});
