import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Agrega tus objetivos del dia! 👋</Text>
      </View>

      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Tomar Agua 💧..." />
        <Button style={styles.btn} title="Add" color="steelblue" />
      </View>

      <View style={styles.callToAction}>
        <Text style={styles.important}>Los Objetivos para Hoy!! 🚀</Text>

        <View style={styles.important}>
          <Text >Tomar Awita</Text>
        </View>

      </View>      

      <View style={{ flexDirection: 'row', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
        <Text style={{ backgroundColor: 'black', flex: 1, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>❤️</Text>
        <Text style={{ backgroundColor: 'black', flex: 2, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>💀</Text>
        <Text style={{ backgroundColor: 'black', flex: 3, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>🤖</Text>
      </View>

      <View style={{ flexDirection: 'row', backgroundColor: 'pink', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
        <Text style={{backgroundColor: 'white', flex: 1, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius: 50 }}>🔴</Text>
        <Text style={{backgroundColor: 'white', flex: 5, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius: 50 }}>🔺</Text>
        <Text style={{backgroundColor: 'white', flex: 1, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius: 50 }}>🟥</Text>
      </View>

      <View style={{ flexDirection: 'row', backgroundColor: 'red', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
        <Text style={{ backgroundColor: 'black', flex: 3, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>❤️</Text>
        <Text style={{ backgroundColor: 'black', flex: 2, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>💀</Text>
        <Text style={{ backgroundColor: 'black', flex: 1, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>🤖</Text>
      </View>

      <Image
        source={{ uri: 'https://picsum.photos/200/300?random' }}
        style={{ width: 200, height: 200, marginTop: 20, borderRadius: 100, alignSelf: 'center' }}
      />

    </View>

  );
}

const styles = StyleSheet.create(
  {
    container:
    {
      flexDirection: 'row',
      backgroundColor: 'aliceblue',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },

    callToAction:
    {
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },

    topBar:
    {
      backgroundColor: 'black',
      width: '100%',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
    },

    topBarText: {
      color: 'white',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    btn: {
      alignItems: 'center',
      justifyContent: 'center',
    },

    textInput: {
      width: '80%',
      borderWidth: 1,
    },

    important: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 12,
      borderWidth: 2,
      borderColor: 'steelblue',
      padding: 12,
    },

    title: {
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 12,
      padding: 12,
    }
  }
);