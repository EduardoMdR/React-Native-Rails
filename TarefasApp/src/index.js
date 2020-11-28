import React, {useEffect, useState } from 'react';
import { View, SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api'

export default function App(){
  // Quando eu tiver uma rota, que retorna json, vou conseguir testar isso
  const [project, setProjects] = useState([]);

  useEffect(() => {
    api.get('tasks').then(response => {
      console.log(response.data);
      setProjects(response.data);
    });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="rgb(62, 65, 204)"/>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          {project.map(project => <Text style={styles.text} key={project.id}>{project.title}</Text>)}
          <Text style={styles.title}>Hello</Text>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(62, 65, 204)',
    flex: 1,
    alignItems: 'center'    
  },
  title: {
    color: '#fff',
    fontSize: 20
  },
  text: {
    color: '#FFF',
    fontSize: 12,
  },
});