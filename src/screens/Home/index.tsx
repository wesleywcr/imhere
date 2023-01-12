import React, { useState } from 'react';
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';


export function Home() {
  const [participants,setParticipants] = useState(['Wesley'])
  

  function handleParticipantAdd(){
    if(participants.includes('')){
     return  Alert.alert('Participante existe',"Já existe um participante na lista com esse nome")
    }
    setParticipants(prevState => [...prevState, 'Ana'])
    
  }
  function handleParticipantRemove(name:string){
    Alert.alert('Remover',`Remover  o participante ${name}?`,[
      {
        text:'Sim',
        onPress:()=> Alert.alert('Deletado!')
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