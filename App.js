import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={styles.topBar}>
        <Text style={styles.title}>Agrega tus objetivos del dia! 👋</Text>
      </View>

      <View style={styles.container}>
        <Text>Objetivo</Text>
        <TextInput style={styles.important} placeholder="Tomar Agua 💧..." />
        <Button style={styles.btn} title="🏹 Añadir Objetivo" color="steelblue" />
      </View>

      <View style={styles.callToAction}>
        <Text style={styles.important}>Los Objetivos para Hoy!! 🚀</Text>

        <View style={styles.important}>
          <Text >Tomar Awita</Text>
        </View>

        <View style={styles.important}>
          <Text >Tomar Awita</Text>
        </View>

        <View style={styles.important}>
          <Text >Tomar Awita</Text>
        </View>
      </View>

      <View style={styles.topBar}>
        <Text style={styles.title}>HeriTech ® Todos los derechos reservados.</Text>
      </View>

    </View>

  );
}

const styles = StyleSheet.create(
  {
    container:
    {
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
      backgroundColor: 'lightblue',
      width: '100%',
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 40,
      fontWeight: 'bold',
    },

    btn: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: 'red',
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