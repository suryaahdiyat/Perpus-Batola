-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 20, 2024 at 02:22 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_perpustakaan`
--

-- --------------------------------------------------------

--
-- Table structure for table `buku`
--

CREATE TABLE `buku` (
  `id_buku` int(11) NOT NULL,
  `judul` varchar(50) NOT NULL,
  `tahun` int(5) NOT NULL,
  `pengarang` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `buku`
--

INSERT INTO `buku` (`id_buku`, `judul`, `tahun`, `pengarang`) VALUES
(1, 'Laskar Pelangi', 2005, 'Andrea Hirata'),
(2, 'Bumi Manusia', 1980, 'Pramoedya Ananta Toer'),
(3, 'Negri 5 Menara', 2009, 'Ahmad Fuadi'),
(4, 'Ayat-ayat Cinta', 2004, 'Habiburrahman El-Shirazy'),
(6, 'Saman', 1998, 'Ayu Utami'),
(7, 'Bidadari-bidadari Surga', 2005, 'Tere Liye'),
(8, 'Perahu Kertas', 2009, 'Dee Lestari'),
(9, 'Cerita Hati', 2010, 'Leila S. Chudori'),
(10, 'Lelaki Harimau', 2004, 'Eka Kurniawan'),
(11, 'Tarian Bumi', 2000, 'Oka Rusmini'),
(12, 'Perang Diponegoro', 1955, 'Pramoedya Ananta Toer'),
(13, 'Dunia Sophie', 1991, 'Jostein Gaarder'),
(14, 'Sang Pemimpi', 2006, 'Andrea Hirata'),
(15, 'Negeri Para Bedebah', 2015, 'Tere Liye'),
(16, 'The Shining', 1977, 'Stephen King'),
(17, 'The Road', 2006, 'Cormac McCarthy'),
(18, 'The Alchemist', 1988, 'Paulo Coelho'),
(19, 'The Great Gatsby', 1925, 'F. Scott Fitzgerald'),
(20, 'The Lord Of The Rings', 1955, 'J.R.R Tolkien'),
(21, 'Norwegian Wood', 1987, 'Haruki Murakami'),
(22, 'Crime and Punishment', 1866, 'Fyodor Dostoevsky'),
(23, 'To Kill A Mockingbird', 1960, 'Harper Lee'),
(24, 'The Martian', 2011, 'Andy Weir'),
(25, 'Educated', 2018, 'Tara Westover'),
(31, 'Pulang', 2012, 'Tere Liye'),
(36, 'buku-test', 2024, 'surya');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id_role` varchar(5) NOT NULL,
  `role_name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id_role`, `role_name`) VALUES
('A', 'Admin'),
('B', 'Standar');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `id_role` varchar(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `name`, `email`, `id_role`) VALUES
(1, 'Admin', 'Admin@gmail.com', 'A'),
(2, 'surya', 'surya@gmail.com', 'B'),
(4, 'Pow Patrol', 'powpatrol@gmail.com', 'B'),
(8, 'Doraemon', 'doraemon@gmail.com', 'B');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `buku`
--
ALTER TABLE `buku`
  ADD PRIMARY KEY (`id_buku`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id_role`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `id_role` (`id_role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `buku`
--
ALTER TABLE `buku`
  MODIFY `id_buku` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `id_role` FOREIGN KEY (`id_role`) REFERENCES `role` (`id_role`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
