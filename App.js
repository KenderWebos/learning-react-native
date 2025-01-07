import { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView } from 'react-native';

export default function App() {
  const [enteredTaskText, setEnteredTaskText] = useState('');
  const [tasksList, setTaskList] = useState([]);

  function taskInputHandler(enteredText) {
    setEnteredTaskText(enteredText);
  };

  function addTaskHandler() {
    setTaskList((currentTaskList) => [...currentTaskList, enteredTaskText]);
    setEnteredTaskText('');
  };

  function removeAllTaskHandler() {
    setTaskList([]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Agrega tus objetivos del dia! 👋</Text>
      </View>

      <View style={styles.sectionGetTask}>
        <TextInput value={enteredTaskText} style={styles.textInput} onChangeText={taskInputHandler} placeholder="Tomar Agua 💧, Leer 📚 ..." />
        <Button style={styles.btn} onPress={addTaskHandler} title="Agregar" color="steelblue" />
        <Button style={styles.btn} onPress={removeAllTaskHandler} title="Borrar" color="red" />
      </View>

      <View style={styles.callToAction}>
        <Text>Los Objetivos para Hoy!! 🚀</Text>

        <View>
          <ScrollView>
            {tasksList.map((task, index) => <Text style={styles.important} key={index}>{index + 1} - {task}</Text>)}
          </ScrollView>
        </View>

      </View>

      {/* <View style={{ flexDirection: 'row', backgroundColor: 'lightblue', alignItems: 'center', justifyContent: 'center', padding: 5 }}>
        <Text style={{ backgroundColor: 'black', flex: 1, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>❤️</Text>
        <Text style={{ backgroundColor: 'black', flex: 2, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>💀</Text>
        <Text style={{ backgroundColor: 'black', flex: 3, fontSize: 25, textAlign: 'center', margin: 10, padding: 15, borderRadius:25}}>🤖</Text>
      </View>

      <Image
        source={{ uri: 'https://picsum.photos/200/300?random' }}
        style={{ width: 200, height: 200, marginTop: 20, borderRadius: 100, alignSelf: 'center' }}
      /> */}

    </View>

  );
}

const styles = StyleSheet.create(
  {
    appContainer: {
      flex: 1,
      backgroundColor: 'lightgreen',
    },

    sectionGetTask:
    {
      flexDirection: 'row',
      backgroundColor: 'aliceblue',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,

      borderBottomWidth: 1,
      borderBottomColor: 'black',
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
      flex: 1,
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