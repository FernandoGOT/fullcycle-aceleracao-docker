const mysql = require('mysql');
const express = require('express');
const { uniqueNamesGenerator, names, starWars } = require('unique-names-generator');

const modules = [
  {
    id: 116,
    nome: 'Comunicação',
    descricao: 'Comunicação',
    cor: '#28ad00',
    icone: 'icon-reuse',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '48',
    arquivo_path: null
  },
  {
    id: 126,
    nome: 'Microsserviço - Assinaturas com Django (Back-end)  - (em breve)',
    descricao: 'Microsserviço - Assinaturas com Django (Back-end)',
    cor: '#318000',
    icone: 'icon-django',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: true,
    enable_drm: true,
    progresso: 0,
    arquivo_path: null
  },
  {
    id: 125,
    nome: 'Microsserviço - Aplicação do Assinante com React.js (Front-end) -  (em breve)',
    descricao: 'Microsserviço - Aplicação do Assinante com React.js',
    cor: '#43a3e8',
    icone: 'icon-ReactJS',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: true,
    enable_drm: true,
    progresso: 0,
    arquivo_path: null
  },
  {
    id: 124,
    nome: 'Arquitetura do projeto prático - Codeflix',
    descricao: 'Arquitetura do projeto prático - Codeflix',
    cor: '#8dd900',
    icone: 'icon-arquitetura',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 123,
    nome: 'Domain Driven Design e Arquitetura hexagonal',
    descricao: 'Domain Driven Design e Arquitetura hexagonal',
    cor: '#a057ad',
    icone: 'icon-setas-D-E2',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 122,
    nome: 'Service Discovery (em breve)',
    descricao: 'Service Discovery',
    cor: '#6b9156',
    icone: 'icon-plano-timeline',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: true,
    enable_drm: true,
    progresso: 0,
    arquivo_path: null
  },
  {
    id: 121,
    nome: 'Apache Kafka (em breve)',
    descricao: 'Apache Kafka (em breve)',
    cor: '#c99275',
    icone: 'icon-apache',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: true,
    enable_drm: true,
    progresso: 0,
    arquivo_path: null
  },
  {
    id: 120,
    nome: 'Deploy nos Cloud Providers (em breve)',
    descricao: 'Deploy nos Cloud Providers',
    cor: '#ebbc00',
    icone: 'icon-Infra1',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: true,
    enable_drm: true,
    progresso: 0,
    arquivo_path: null
  },
  {
    id: 119,
    nome: 'Observabilidade (em breve)',
    descricao: 'Observabilidade',
    cor: '#ed001c',
    icone: 'icon-ElasticSearch',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: true,
    enable_drm: true,
    progresso: 0,
    arquivo_path: null
  },
  {
    id: 118,
    nome: 'Service Mesh com Istio (em breve)',
    descricao: 'Service Mesh com Istio (em breve)',
    cor: '#73638a',
    icone: 'icon-Istio',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: true,
    mostrar_desabilitado: true,
    enable_drm: true,
    progresso: 0,
    arquivo_path: null
  },
  {
    id: 117,
    nome: 'Kubernetes',
    descricao: 'Kubernetes',
    cor: '#8700fc',
    icone: 'icon-Kubernetes',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 115,
    nome: 'Integração contínua',
    descricao: 'Integração contínua',
    cor: '#8097f2',
    icone: 'icon-update-arrow',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 114,
    nome: 'Autenticação entre os microsserviços',
    descricao: 'Autenticação entre os microsserviços',
    cor: '#738df5',
    icone: 'icon-projeto-pratico',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 113,
    nome: 'Padrões e técnicas avançadas com Git e Github',
    descricao: 'Padrões e técnicas avançadas com Git e Github',
    cor: '#ff0044',
    icone: 'icon-github',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 112,
    nome: 'Fundamentos de Arquitetura de Software',
    descricao: 'Arquitetura de software - Fundamentos',
    cor: '#7600b5',
    icone: 'icon-arquitetura',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '100',
    arquivo_path: null
  },
  {
    id: 108,
    nome: 'Autenticação e Keycloak',
    descricao: 'Autenticação e Keycloak',
    cor: '#3a453e',
    icone: 'icon-code2',
    carga_horaria: '32',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 102,
    nome: 'RabbitMQ',
    descricao: 'RabbitMQ',
    arquivo: '102.png',
    cor: '#77c22d',
    icone: 'icon-RabbitMQ4',
    carga_horaria: '32',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '100',
    arquivo_path: '/uploads/cursos/102/102.png?27'
  },
  {
    id: 110,
    nome: 'Docker',
    descricao: 'Docker',
    cor: '#43a3e8',
    icone: 'icon-docker',
    carga_horaria: '100',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '100',
    arquivo_path: null
  },
  {
    id: 105,
    nome: 'Microsserviço - API do Catálogo com Node.JS (Back-end)',
    descricao: 'Microsserviço - API do Catálogo com Node.JS (Back-end)',
    cor: '#8dd900',
    icone: 'icon-API1',
    carga_horaria: '32',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 103,
    nome: 'Microsserviço de Encoder de Vídeo com Go Lang',
    descricao: 'Microsserviço de Encoder de Vídeo com Go Lang',
    cor: '#0000db',
    icone: 'icon-Go04',
    carga_horaria: '32',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '2',
    arquivo_path: null
  },
  {
    id: 109,
    nome: 'Microsserviço: Catálogo de vídeos com React ( Front-end )',
    descricao: 'Nesse módulo iremos desenvolver o Frontend do Microsserviço de Catalogo de vídeos',
    cor: '#b791ed',
    icone: 'icon-ReactJS',
    carga_horaria: '32',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  },
  {
    id: 107,
    nome: 'Microsserviço: Catálogo de vídeos com Laravel ( Back-end )',
    descricao: 'Nesse módulo iremos desenvolver o Backend do Microsserviço de Catalogo de vídeos',
    cor: '#ed001c',
    icone: 'icon-laravel',
    carga_horaria: '32',
    com_expiracao: false,
    escapar_conteudo_ev: false,
    dias_expiracao: '0',
    ativo: true,
    disable_progress: false,
    mostrar_desabilitado: false,
    enable_drm: true,
    progresso: '0',
    arquivo_path: null
  }
];

const app = express();
const port = 3010;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const createDB = () => {
  const createDataBaseQuery = `CREATE DATABASE IF NOT EXISTS nodedb`;
  const createTableQuery = `CREATE TABLE IF NOT EXISTS modules (id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), name VARCHAR(255) )`;
  let populateQuery = `INSERT INTO modules(name) values`;

  modules.forEach((module, index) => {
    populateQuery += `('${module.nome}')`;
    if (index < modules.length - 1) {
      populateQuery += ',';
    }
  });

  const connection = mysql.createConnection(config);
  connection.query(createDataBaseQuery);
  connection.query(createTableQuery);
  connection.query(populateQuery);

  connection.end();
};

const getModules = () =>
  new Promise((resolve, reject) => {
    const getQuery = `SELECT name FROM modules`;

    const connection = mysql.createConnection(config);
    connection.query(getQuery, (err, results) => {
      const modulesList = [];

      if (err) {
        return reject(err);
      }

      results.forEach(rowData => modulesList.push(rowData.name));

      resolve(modulesList);
    });

    connection.end();
  });

createDB();

app.get('/', async (req, res) => {
  const modulesList = await getModules();

  let newHTML = '<h1>Full Cycle!</h1><br /><ul>';

  modulesList.forEach(name => (newHTML += `<li>${name}</li>`));
  newHTML += '</ul>';

  res.send(newHTML);
});

app.listen(port, () => {
  console.log(`rodando na porta ${port}`);
});
