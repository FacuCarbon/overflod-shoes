-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: overflodshoes
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.14-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Nike'),(2,'Adidas'),(3,'Fila'),(4,'Rebook'),(5,'Topper'),(6,'New Balance'),(7,'Puma'),(8,'All Stars'),(9,'DC'),(10,'Kappa'),(11,'Olympicus'),(12,'Lotto');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carts`
--

DROP TABLE IF EXISTS `carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_usuario` int(11) NOT NULL,
  `id_producto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `remito` int(11) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuario_idx` (`id_usuario`),
  KEY `idProducto_idx` (`id_producto`),
  CONSTRAINT `idProducto` FOREIGN KEY (`id_producto`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idUsuario` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carts`
--

LOCK TABLES `carts` WRITE;
/*!40000 ALTER TABLE `carts` DISABLE KEYS */;
/*!40000 ALTER TABLE `carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'calzados'),(2,'indumentaria'),(3,'accesorio');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `color` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'Negro / Blanco'),(2,'Negro/Rojo'),(3,'Blanco'),(4,'Negro'),(5,'Azul'),(6,'Gris'),(7,'Rosa'),(8,'Amarillo'),(9,'Marron');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` int(11) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `imagenes` varchar(70) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `id_colores` int(11) DEFAULT NULL,
  `id_talles` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idCategoria_idx` (`id_categoria`),
  KEY `idMarca_idx` (`id_marca`),
  KEY `idColores_idx` (`id_colores`),
  KEY `idTalles_idx` (`id_talles`),
  CONSTRAINT `idCategoria` FOREIGN KEY (`id_categoria`) REFERENCES `categories` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idColores` FOREIGN KEY (`id_colores`) REFERENCES `colors` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idMarca` FOREIGN KEY (`id_marca`) REFERENCES `brand` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idTalles` FOREIGN KEY (`id_talles`) REFERENCES `size` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Fila Fr Lumix',6490,'Las zapatillas Fila Fr Lumix están diseñadas para todo tipo de entrenamiento. Capellada confeccionada en tejido diferenciado con piezas aplicadas para una mejor estructura de calce. Entresuela con tecnología ENERGIZED brinda una excelente amortiguación. Suela con insertos de caucho en puntos específ','imagen-1606795798704.webp','2020-12-01 04:09:58','2020-12-01 04:09:58',1,3,2,6),(2,'Adidas Sense Bounce',5699,'Te presentamos las nuevas Zapatillas Adidas Sense Bounce, confeccionadas en materiales duraderos y resistentes, para que puedas disfrutar de tus días de running con la mayor amortiguación. ','imagen-1606795998918.webp','2020-12-01 04:13:18','2020-12-01 04:13:18',1,2,7,3),(3,'Nike Superfly 7 Academy Tf',5999,'Los botines Nike Superfly 7 Academy nacieron para que te conviertas en el mejor dentro de la cancha. Un diseño exclusivo, audaz y cómodo te permitirán sentir el control y la precisión que necesitas, además de contar con un calzado liviano para cambiar tu ritmo de juego cuando lo necesites.','imagen-1606796290808.webp','2020-12-01 04:18:10','2020-12-01 04:18:10',1,1,5,8),(4,'Topper Profesional',2999,'as Zapatillas Topper Profesional Infantil son el modelo clásico de la marca en su versión para chicos. ','imagen-1606796458329.webp','2020-12-01 04:20:58','2020-12-01 04:20:58',1,5,3,1),(5,'Remera Reebok GS Training Speedwick',1799,'La remera Reebok GS Training Speedwick elimina el sudor de tu cuerpo y te ayuda a mantener tu piel fresca y seca en tus jornadas de entrenamiento. El estampado en el pecho le brinda el estilo de entrenamiento que necesitás. ','imagen-1606796848305.webp','2020-12-01 04:27:28','2020-12-01 04:27:28',2,4,6,3),(6,'Nike Sportwear Gym Vintage',4999,'La campera Nike Sportwear Gym Vintage ofrece un estilo dedicado exclusivamente a las amantes de lo retro. Posee el logo de Nike en su pecho, bolsillos frontales y ajuste con cierre, lo que la hace fácil de usar. Ideal para esos días nublados en los que dudas de ir a entrenar. ','imagen-1606797006810.webp','2020-12-01 04:30:06','2020-12-01 04:30:06',2,1,7,4),(7,'Body Nike Jdi Stripe',2289,'Ideal y comodidad para tu bebe, que se sienta comodo en cada movimiento.','imagen-1606797142092.webp','2020-12-01 04:32:22','2020-12-01 04:32:22',2,1,5,1),(9,'Buzo Adidas River Plate Training Sport 20/21',7198,'El Buzo Adidas River Plate Oficial es parte del uniforme de entrenamiento del Más Grande. Presenta un diseño elástico y un corte ajustado que te permiten moverte con total libertad. Su tejido transpirable y absorbente mantiene tu cuerpo seco en los momentos de mayor intensidad de tu entrenamiento. C','imagen-1606797409570.webp','2020-12-01 04:36:49','2020-12-01 04:36:49',2,2,2,6),(10,'Mochila Lotto Delta',2199,'Ideal para poder llevar tus cosas a donde vayas, comoda, simple y eficaz.','imagen-1606797640519.webp','2020-12-01 04:40:40','2020-12-01 04:40:40',3,10,4,1),(12,'Pelota Nike Psg Skills',2698,'No te olvides la bocha! llevala a donde vayas para disfrutar con amigos.','imagen-1606797806908.webp','2020-12-01 04:43:26','2020-12-01 04:43:26',3,1,3,1),(13,'Palo De Hockey Malik Compo',4199,'\r\n\r\nLos verdaderos deportistas se crean desde chiquitos, por eso desde el primer momento tu hijo se merece lo mejor. Te presentamos el Palo de hockey Malik Compo y Square 6 Orange 36.5. Idóneo para la categoría Menores, es perfecto para la iniciación en este deporte. Confeccionado en carbono y fibra','imagen-1606797897814.webp','2020-12-01 04:44:57','2020-12-01 04:44:57',3,2,3,1),(14,'Muñequera de Tenis Pequeña',1200,'La comidad siempre, no? imperdible muñequera para que puedas jugar siempre comodo.','imagen-1606797989714.webp','2020-12-01 04:46:29','2020-12-01 04:46:29',3,2,4,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `size`
--

DROP TABLE IF EXISTS `size`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `size` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `talle` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `size`
--

LOCK TABLES `size` WRITE;
/*!40000 ALTER TABLE `size` DISABLE KEYS */;
INSERT INTO `size` VALUES (1,24),(2,37),(3,38),(4,39),(5,40),(6,41),(7,42),(8,43),(9,44);
/*!40000 ALTER TABLE `size` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `rango` varchar(45) NOT NULL,
  `direccion` varchar(100) DEFAULT NULL,
  `ciudad` varchar(45) DEFAULT NULL,
  `provincia` varchar(45) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'facundo','Carbon','facundocarbon2015@gmail.com','$2b$10$lT14uCY8cwTvZUNLNahN9.Mdl3oHiD88035F2dBUpURR1VUAQpOiS','administrador',NULL,NULL,NULL,NULL,'2020-11-03 17:32:38','2020-11-03 17:32:38'),(4,'Juan','Perez','juanperez@perez.com','$2b$10$xmXVMd5awBLBrxCTJJ4n6O3qRlZqMU6SpuaP7T4f/T.8X1ETF/B0q','usuario',NULL,NULL,NULL,NULL,'2020-11-06 03:51:36','2020-11-06 03:51:36'),(5,'el','pepe','pepe@pepe.com','$2b$10$atUCClJ2D6EUe0biaiuf/eOgoGm/2SDfJBvKRO0z4TH.dmqW9o/gm','usuario',NULL,NULL,NULL,NULL,'2020-11-06 03:52:32','2020-11-06 03:52:32'),(7,'s','sdasd','a@hotmail.com','$2b$10$dSQCHuYZ7.uX4M7KqsqFX.Mjv3IG4h5NYP.lKYUbZYSZeBTj7GCs2','usuario',NULL,NULL,NULL,NULL,'2020-11-22 05:44:34','2020-11-22 05:44:34');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-01 18:03:44
