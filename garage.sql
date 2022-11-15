-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mar. 15 nov. 2022 à 15:55
-- Version du serveur : 5.7.34
-- Version de PHP : 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `garage`
--

-- --------------------------------------------------------

--
-- Structure de la table `cars`
--

CREATE TABLE `cars` (
  `id` int(11) NOT NULL,
  `mark` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `cars`
--

INSERT INTO `cars` (`id`, `mark`, `model`, `price`, `createdAt`, `updatedAt`) VALUES
(1, 'Tesla', 'Model X', 141000, '2022-11-15 15:33:23', '2022-11-15 15:33:23'),
(2, 'BMW', 'M8 Competition', 175000, '2022-11-15 15:33:23', '2022-11-15 15:33:23'),
(3, 'Renault', 'Megane RS', 40000, '2022-11-15 15:33:23', '2022-11-15 15:33:23'),
(4, 'Porsche', 'Panamera', 100000, '2022-11-15 15:33:23', '2022-11-15 15:33:23'),
(5, 'Audi', 'RS7', 123000, '2022-11-15 15:33:23', '2022-11-15 15:33:23');

-- --------------------------------------------------------

--
-- Structure de la table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `customers`
--

INSERT INTO `customers` (`id`, `lastname`, `firstname`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'MATIAS', 'Brice', 'brice.matias@free.fr', '2022-11-15 15:48:06', '2022-11-15 15:48:06'),
(2, 'CATURLA', 'Matias', 'matias.caturla@gmail.com', '2022-11-15 15:48:06', '2022-11-15 15:48:06'),
(3, 'EXPOSITO', 'Valerie', 'v.exposito@wanadoo.fr', '2022-11-15 15:48:06', '2022-11-15 15:48:06');

-- --------------------------------------------------------

--
-- Structure de la table `employees`
--

CREATE TABLE `employees` (
  `matricule` int(11) NOT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `employees`
--

INSERT INTO `employees` (`matricule`, `lastname`, `firstname`, `email`, `createdAt`, `updatedAt`) VALUES
(1, 'FAVEREAUX', 'Alexis', 'alexis.favereaux@ynov.com', '2022-11-15 15:53:52', '2022-11-15 15:53:52'),
(2, 'GLORIES', 'Valmond', 'valmond.glories@ynov.com', '2022-11-15 15:53:52', '2022-11-15 15:53:52');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `cars`
--
ALTER TABLE `cars`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`matricule`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `cars`
--
ALTER TABLE `cars`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `employees`
--
ALTER TABLE `employees`
  MODIFY `matricule` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
