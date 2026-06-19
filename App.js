import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';


export const validarRetirada = (estoqueAtual, quantidadeRetirada) => {
  return (
    quantidadeRetirada > 0 &&
    quantidadeRetirada <= estoqueAtual
  );
};

export default function App() {
  // --- Estados da Aplicação (Os alunos implementarão aqui) ---
  const [materials, setMaterials] = useState([]);
  const [nome, setNome] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [loading, setLoading] = useState(false);
  const [retiradas, setRetiradas] = useState({});

  // --- Funções de Requisição e Efeitos (Os alunos implementarão aqui) ---
 const  API_URL =  'https://6a2b400db687a7d5cbc50545.mockapi.io/apiProva/materiais';

  useEffect(() => {
  carregarMateriais();
  }, []);

  // Função para adiconar ou atualizar material
  const adicionarOuAtualizarMaterial = async () => {
    if(!nome || !quantidade) {
      alert('Por favor, preencha ambos os campos!');  // Função para preencher os campos
      return;
    }

    if (isNaN(quantidade)) {
    alert('A quantidade deve ser um número!');
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
  }

};

const carregarMateriais = async () => {
  setLoading(true);

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    setMaterials(data);
  } catch (error) {
    console.error('Erro ao carregar materiais:', error);
  } finally {
    setLoading(false);
  }
};

const baixarMaterial = async (item) => {
  const quantidadeRetirada = Number(retiradas[item.id] || 0);

  if (!validarRetirada(item.quantidade, quantidadeRetirada)) {
    alert('Quantidade inválida para retirada!');
    return;
  }

  try {
    await fetch(`${API_URL}/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...item,
        quantidade: item.quantidade - quantidadeRetirada,
      }),
    });

    carregarMateriais();

    setRetiradas({
      ...retiradas,
      [item.id]: '',
    });
  } catch (error) {
    console.error('Erro ao baixar estoque:', error);
  }
};

 // excluir material
const excluirMaterial = async (id) => {
  console.log("Excluindo:", id);

  try {
    await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    carregarMateriais();
  } catch (error) {
    console.error(error);
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

        <Text style={styles.subtitle}>
        Estoque de Materiais
        </Text>


      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
      <FlatList
        testID="lista-materiais"
        data={materials}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
          <Text style={styles.nomeMaterial}>{item.nome}</Text>
          <Text>Quantidade: {item.quantidade}</Text>

          <TextInput
           testID="input-retirada"
           placeholder="Qtd retirada"
           keyboardType="numeric"
           value={retiradas[item.id] || ''}
           onChangeText={(text) =>
           setRetiradas({...retiradas,
           [item.id]: text,
         })
         }
          style={styles.inputRetirada}
          />

         <TouchableOpacity
          testID="btn-baixar"
          onPress={() => baixarMaterial(item)}
          style={styles.button}
          >
         <Text style={styles.buttonText}>Baixar</Text>
         </TouchableOpacity>

        <TouchableOpacity
          testID="btn-excluir"
          onPress={() => excluirMaterial(item.id)}
          style={styles.btnExcluir}
       >
        <Text style={styles.actionText}>Excluir</Text>
        </TouchableOpacity>
        </View>
        )}
      />
      )}
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
  },

  subtitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  },

  nomeMaterial: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 5,
  },

  btnExcluir: {
  backgroundColor: '#dc2626',
  padding: 10,
  borderRadius: 8,
  alignItems: 'center',
  marginTop: 10,
 },

  actionText: {
  color: '#fff',
  fontWeight: 'bold',
},

  inputRetirada: {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 8,
  padding: 10,
  marginTop: 10,
  marginBottom: 10,
 },

}); 