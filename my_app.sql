-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-09-2019 a las 10:47:02
-- Versión del servidor: 10.4.6-MariaDB
-- Versión de PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `my_app`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `restaurants`
--

CREATE TABLE `restaurants` (
  `id_restaurant` tinyint(3) NOT NULL,
  `name` text COLLATE utf8_bin NOT NULL,
  `address` text COLLATE utf8_bin NOT NULL,
  `lat` decimal(9,6) NOT NULL,
  `lng` decimal(9,6) NOT NULL,
  `king_food` set('Mexicano','Vegetariano','Mediterráneo','Italiano','Braseria') COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `restaurants`
--

INSERT INTO `restaurants` (`id_restaurant`, `name`, `address`, `lat`, `lng`, `king_food`) VALUES
(1, 'La Taberna De L\'EIXAMPLE Venezolanos', 'Gran Via de les Corts Catalanes, 688, 08010 Barcelona', '41.393700', '2.174760', 'Vegetariano'),
(2, 'Giulietta Cafe', 'Plaça de Tetuan, 4, 08010 Barcelona', '41.393729', '2.175066', 'Italiano'),
(3, 'Peix d\'Or', 'Carrer d\'Ausiàs Marc, 73, 08013 Barcelona', '41.393746', '2.178259', 'Mediterráneo'),
(4, 'Piratas', 'Carrer d\'Ausiàs Marc, 157, 08013 Barcelona', '41.397043', '2.182988', 'Braseria'),
(5, 'El Punto', 'Carrer de Padilla, 170, 08013 Barcelona', '41.399330', '2.185551', 'Mediterráneo'),
(6, 'La Piazzenza', 'Av. de Gaudí, 27, 08025 Barcelona', '41.404516', '2.174481', 'Italiano'),
(7, 'Restaurante El Ruedo', 'Carrer del Rosselló, 540, 08026 Barcelona', '41.407413', '2.176191', 'Mexicano'),
(8, 'Els Pescadors', 'Plaça de Prim, 1, 08005 Barcelona', '41.399685', '2.204346', 'Mediterráneo'),
(9, 'Disfrutar', 'Carrer de Villarroel, 163, 08036 Barcelona', '41.387779', '2.153534', 'Mediterráneo'),
(10, 'Hummus Barcelona', 'Carrer de València, 227, 08007 Barcelona', '41.391003', '2.161021', 'Vegetariano');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `restaurants`
--
ALTER TABLE `restaurants`
  ADD PRIMARY KEY (`id_restaurant`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
