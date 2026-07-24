CREATE DATABASE IF NOT EXISTS jk_cine_play;
USE jk_cine_play;

-- Servidores (Xtream/M3U)
CREATE TABLE IF NOT EXISTS servidores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  tipo ENUM('xtream','m3u','m3u_plus') NOT NULL,
  url TEXT NOT NULL,
  usuario VARCHAR(100),
  senha VARCHAR(100),
  ativo BOOLEAN DEFAULT TRUE,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Dispositivos
CREATE TABLE IF NOT EXISTS dispositivos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  mac VARCHAR(20) UNIQUE NOT NULL,
  status ENUM('pendente','ativo','bloqueado') DEFAULT 'pendente',
  servidor_id INT NULL,
  nome_dispositivo VARCHAR(100),
  modelo VARCHAR(50),
  ip VARCHAR(45),
  data_ativacao DATETIME,
  data_expiracao DATETIME,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (servidor_id) REFERENCES servidores(id)
);

-- Categorias
CREATE TABLE IF NOT EXISTS categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  tipo ENUM('ao_vivo','filme','serie') NOT NULL,
  ordem INT DEFAULT 0,
  ativo BOOLEAN DEFAULT TRUE
);

-- Conteúdos
CREATE TABLE IF NOT EXISTS conteudos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  categoria_id INT,
  nome VARCHAR(200) NOT NULL,
  logo VARCHAR(255),
  url TEXT NOT NULL,
  descricao TEXT,
  ano INT,
  duracao VARCHAR(20),
  ativo BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);

-- Banners da Home
CREATE TABLE IF NOT EXISTS home_banners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(150),
  imagem VARCHAR(255) NOT NULL,
  ordem INT DEFAULT 0,
  ativo BOOLEAN DEFAULT TRUE
);
