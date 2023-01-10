import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';


export function Home() {

  function handleParticipantAdd(){
    console.log('Clique');
    
  }
  return (
 
   <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventDate}>05, de janeiro de 2023</Text>
<View style={styles.form}>


    <TextInput style={styles.input} 
     placeholder={'Nome do participante'}
     placeholderTextColor="#6b6b6b"
    />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>
    <Participant/>
   </View>
   
  );
}