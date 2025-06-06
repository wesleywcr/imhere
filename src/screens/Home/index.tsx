import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';


export function Home() {
  const [participants,setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd(){
    if(participants.includes(participantName)){
     return  Alert.alert('Participante existe',"Já existe um participante na lista com esse nome")
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
    
  }
  function handleParticipantRemove(name:string){
  
    Alert.alert('Remover',`Remover  o participante ${name}?`,[
      {
        text:'Sim',
        onPress:()=>   setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text:'Não',
        style:'cancel'
      }
    ])
  }
  return (
 
   <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventDate}>05, de janeiro de 2023</Text>
<View style={styles.form}>


    <TextInput style={styles.input} 
     placeholder={'Nome do participante'}
     placeholderTextColor="#6b6b6b"
     onChangeText={setParticipantName}
     value={participantName}
    />
    <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
    </View>
    <FlatList
     data={participants}
     keyExtractor={item => item}
     showsVerticalScrollIndicator={false}
     renderItem={({item})=>(
      <Participant
        key={item}
        name={item}
        onRemove={()=>handleParticipantRemove(item) }/>
     )}
     ListEmptyComponent={()=>(
      <Text style={styles.lisyEmptyText}>Adicione participantes a sua lista de presença!!!</Text>
     )}
    />
 
   
   </View>
   
  );
}