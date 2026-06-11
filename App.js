import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';


export default function App() {
  // --- Estados da Aplicação (Os alunos implementarão aqui) ---
  const [materials, setMaterials] = useState([]);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [editandoID, setEditandoID] = useState(null);

  // --- Funções de Requisição e Efeitos (Os alunos implementarão aqui) ---

  // Função para preencher os campos
  const adicionarOuAtualizarMaterial = () => {
    if(!nome || !quantidade) {
      alert('Por favor, preencha ambos os campos!');
      return;
    }
  }

  // Função para validar se a quantidade é número
  if (isNaN(quantidade)) {
    alert('A quantidade deve ser um número!');
    return;
  }

  // Função para adicionar ou atualizar material
  if(editandoID) {
  const materialAtualizado = materials.map(item => 
    item.id === editandoID ? { ...item, nome, quantidade: parseInt(quantidade) } : item);
  
  setMaterials(materialAtualizado);
  setEditandoID(null);
  } else {
  const novoMaterial = {
    id: Date.now().toString(),
    nome,
    quantidade: parseInt(quantidade),
  };
  setMaterials([...materials, novoMaterial]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Almoxarifado - Enfermagem</Text>
      
      {/* Breve descrição do projeto inserida abaixo */}
      <Text style={styles.description}>
        Este template servirá para desenvolver o projeto responsável por modernizar o controle de insumos médicos do almoxarifado. 
        Através desta interface conectada à API, é possível realizar o inventário em tempo real, cadastrar novos materiais e registrar baixas de estoque de forma ágil e segura.
      </Text>

      {/* Os alunos vão construir os componentes visuais das Sprints aqui dentro */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10, // Reduzido ligeiramente para aproximar o texto explicativo
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20, // Dá um espaçamento confortável entre as linhas do parágrafo
    marginBottom: 30, // Margem inferior para afastar o texto dos futuros inputs dos alunos
  }
});