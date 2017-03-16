-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 07, 2017 at 03:14 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `milind`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_galleryImage`
--

CREATE TABLE `tb_galleryImage` (
  `image_id` int(3) NOT NULL,
  `image_thumb` varchar(3) NOT NULL,
  `image_title` varchar(35) NOT NULL,
  `image_desc` varchar(150) NOT NULL,
  `image_mainImage` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tb_galleryImage`
--

INSERT INTO `tb_galleryImage` (`image_id`, `image_thumb`, `image_title`, `image_desc`, `image_mainImage`) VALUES
(1, '001', 'Astad', 'Bulbasaur is a quadruped, reptilian creature that somewhat resembles a toad or a young dinosaur with a spotted blue-green hide. It has three white toe', 'forest'),
(2, '004', 'Milind', 'Charmander is an orange reptilian creature resembling a tailed bipedal salamander with some dinosaur qualities, particularly like those of theropods. ', 'lava'),
(3, '007', 'Chandu', 'Squirtle is a short, tailed bipedal Pokemon. However, it has also been shown to be able to walk on all fours. They resemble a light blue turtle with t', 'beach'),
(4, '025', 'Eurokids', 'Pikachu is a short, chubby, rodent-like Pokemon with yellow fur all over its body. Pikachu\'s ears are long and come to a point with black tips. It has', 'grass'),
(5, '', '', '', ''),
(6, '', '', '', ''),
(7, '', '', '', ''),
(8, '', '', '', ''),
(9, '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_galleryImage`
--
ALTER TABLE `tb_galleryImage`
  ADD PRIMARY KEY (`image_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_galleryImage`
--
ALTER TABLE `tb_galleryImage`
  MODIFY `image_id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
