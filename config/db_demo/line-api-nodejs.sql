-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 26, 2022 at 07:11 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `line-api-nodejs`
--

-- --------------------------------------------------------

--
-- Table structure for table `scanfiger`
--

CREATE TABLE `scanfiger` (
  `id` int(5) NOT NULL,
  `date` date NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL,
  `checkin` varchar(255) DEFAULT NULL,
  `checkout` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scanfiger`
--

INSERT INTO `scanfiger` (`id`, `date`, `name`, `checkin`, `checkout`) VALUES
(3, '2022-07-23', 'สันติ ชูประยูร', '2022-07-23 07:59', '2022-07-23 17:36'),
(4, '2022-07-24', 'สันติ ชูประยูร', '2022-07-24 11:00', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tb_liff`
--

CREATE TABLE `tb_liff` (
  `id` int(3) NOT NULL,
  `userId` varchar(255) NOT NULL,
  `dep` varchar(255) NOT NULL,
  `punha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tb_liff`
--

INSERT INTO `tb_liff` (`id`, `userId`, `dep`, `punha`) VALUES
(1, 'U398c262d765b509fd2dd1f3ffd8e59e6', 'การเงิน', 'printer ไม่ออก'),
(2, 'U398c262d765b509fd2dd1f3ffd8e59e6', 'ปัญชี', 'เปิดคอมไม่ติด'),
(3, 'U398c262d765b509fd2dd1f3ffd8e59e6', 'เช่า', 'ไม่ไหม');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `scanfiger`
--
ALTER TABLE `scanfiger`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_liff`
--
ALTER TABLE `tb_liff`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `scanfiger`
--
ALTER TABLE `scanfiger`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `tb_liff`
--
ALTER TABLE `tb_liff`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
