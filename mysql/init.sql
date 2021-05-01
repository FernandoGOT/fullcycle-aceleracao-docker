CREATE DATABASE IF NOT EXISTS nodedb;
CREATE TABLE IF NOT EXISTS modules (id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY(id), name VARCHAR(255) );
INSERT INTO modules(name)
VALUES
  ('Comunicação'),
  ('Microsserviço - Assinaturas com Django (Back-end)  - (em breve)'),
  ('Microsserviço - Aplicação do Assinante com React.js (Front-end) -  (em breve)'),
  ('Arquitetura do projeto prático - Codeflix'),
  ('Domain Driven Design e Arquitetura hexagonal'),
  ('Service Discovery (em breve)'),
  ('Apache Kafka (em breve)'),
  ('Deploy nos Cloud Providers (em breve)'),
  ('Observabilidade (em breve)'),
  ('Service Mesh com Istio (em breve)'),
  ('Kubernetes'),
  ('Integração contínua'),
  ('Autenticação entre os microsserviços'),
  ('Padrões e técnicas avançadas com Git e Github'),
  ('Fundamentos de Arquitetura de Software'),
  ('Autenticação e Keycloak'),
  ('RabbitMQ'),
  ('Docker'),
  ('Microsserviço - API do Catálogo com Node.JS (Back-end)'),
  ('Microsserviço de Encoder de Vídeo com Go Lang'),
  ('Microsserviço: Catálogo de vídeos com React ( Front-end )'),
  ('Microsserviço: Catálogo de vídeos com Laravel ( Back-end )');