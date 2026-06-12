import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';


export default function App() {
  // --- Estados da Aplicação (Os alunos implementarão aqui) ---
  const [materials, setMaterials] = useState([]);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [editandoID, setEditandoID] = useState(null);

  // --- Funções de Requisição e Efeitos (Os alunos implementarão aqui) ---
  useEffect(() => {
  carregarMateriais();
  }, []);

  const  API_URL =  'https://6a2b400db687a7d5cbc50545.mockapi.io/apiProva/materiais';

  // Função para adiconar ou atualizar material
  const adicionarOuAtualizarMaterial = async () => {
    if(!nome || !quantidade) {
      alert('Por favor, preencha ambos os campos!');  // Função para preencher os campos
      return;
    }

    try {
      const novoMaterial = {
        nome,
        quantidade: Number(quantidade),
      };

      await fetch(API_URL, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoMaterial),
    });

    setNome('');
    setQuantidade('');
    carregarMateriais();
  }
  catch (error) {
    console.error('Erro ao adicionar material:', error);
  }};

};


// Função de remover material
const removerMaterial = (id) => {
  setMaterials(materials.filter(item => item.id !== id));

// Se estiver sendo editado cancela a edição
  if(editandoID === id) {
    setEditandoID(null);
    setNome('');
    setQuantidade('');
  }
};

// preenche os campos para edição
const editarMaterial = (item) => {
  setNome(item.nome);
  setQuantidade(item.quantidade.toString());
  setEditandoID(item.id);
}

 // subindo para a API
const carregarMateriais = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    setMaterials(data);
  } catch (error) {
    console.error('Erro ao importar materiais:', error);
  }

  
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Almoxarifado - Enfermagem</Text>
      
      {/* Breve descrição do projeto inserida abaixo */}
      <Text style={styles.description}>
        Este template servirá para desenvolver o projeto responsável por modernizar o controle de insumos médicos do almoxarifado. 
        Através desta interface conectada à API, é possível realizar o inventário em tempo real, cadastrar novos materiais e registrar baixas de estoque de forma ágil e segura.
      </Text>

          
        <TextInput
          testID="input-nome"
          placeholder="Nome do Material"
          value={nome}
          onChangeText={setNome}
          style={styles.input} />

        <TextInput
          testID="input-quantidade"
          placeholder="Quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
          keyboardType="numeric"
          style={styles.input}
        />
        
      <TouchableOpacity
       testID="btn-cadastrar" 
       onPress={adicionarOuAtualizarMaterial} 
       style={styles.button}
      >
      <Text style={styles.buttonText}>
       Cadastrar
      </Text>
      
      </TouchableOpacity>

      <FlatList
        testID="lista-materiais"
        data={materials}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
              <Text> {item.nome} </Text>
                 <Text> Quantidade: {item.quantidade} </Text>                
           </View>
        )}
      />
    </View>
  );

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
  },

  input: {
  backgroundColor: '#fff',
  padding: 12,
  borderRadius: 8,
  marginBottom: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  },

  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },


  card: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  }
   
}); 