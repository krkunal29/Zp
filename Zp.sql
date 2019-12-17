-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 17, 2019 at 01:09 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 5.6.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Zp`
--

-- --------------------------------------------------------

--
-- Table structure for table `ClaimApproval`
--

CREATE TABLE `ClaimApproval` (
  `approvalId` int(12) NOT NULL,
  `claimId` int(12) NOT NULL,
  `approvalUser` int(12) NOT NULL,
  `ClaimStatusID` int(12) NOT NULL,
  `ApprovalRoleID` int(12) NOT NULL,
  `ApprovalDate` date NOT NULL,
  `Remarks` text NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ClaimDocuments`
--

CREATE TABLE `ClaimDocuments` (
  `docId` int(12) NOT NULL,
  `claimId` int(12) NOT NULL,
  `imagePath` varchar(255) NOT NULL,
  `DocTypeID` int(12) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `claimStatus`
--

CREATE TABLE `claimStatus` (
  `ClaimStatusId` int(11) NOT NULL,
  `ClaimStatusDescription` varchar(150) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `claimStatus`
--

INSERT INTO `claimStatus` (`ClaimStatusId`, `ClaimStatusDescription`, `CreatedAt`, `UpdatedAt`) VALUES
(1, 'Approved', '2019-12-16 12:22:07', '0000-00-00 00:00:00'),
(2, 'Rejected', '2019-12-16 12:22:07', '0000-00-00 00:00:00'),
(3, 'Docs Pending', '2019-12-16 12:22:19', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `ClaimTypeFlow`
--

CREATE TABLE `ClaimTypeFlow` (
  `ClaimTypeFlowID` int(12) NOT NULL,
  `ClaimTypeID` int(12) NOT NULL,
  `RoleID` int(12) NOT NULL,
  `FlowOrder` int(12) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ClaimTypes`
--

CREATE TABLE `ClaimTypes` (
  `ClaimTypesID` int(11) NOT NULL,
  `claim` varchar(255) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `ClaimTypes`
--

INSERT INTO `ClaimTypes` (`ClaimTypesID`, `claim`, `CreatedAt`, `UpdatedAt`) VALUES
(1, 'General', '2019-12-16 12:13:32', '0000-00-00 00:00:00'),
(2, 'Critical', '2019-12-16 12:13:32', '0000-00-00 00:00:00'),
(3, 'Moderate', '2019-12-16 12:13:45', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `contactmaster`
--

CREATE TABLE `contactmaster` (
  `contactid` int(12) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `mname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `country` varchar(50) NOT NULL,
  `state` varchar(50) NOT NULL,
  `city` varchar(50) NOT NULL,
  `pincode` varchar(50) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(50) NOT NULL,
  `address1` text NOT NULL,
  `address2` text NOT NULL,
  `address3` text NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  `statuscode` int(2) DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactmaster`
--

INSERT INTO `contactmaster` (`contactid`, `fname`, `mname`, `lname`, `country`, `state`, `city`, `pincode`, `email`, `phone`, `address1`, `address2`, `address3`, `CreatedAt`, `UpdatedAT`, `statuscode`) VALUES
(1, 'kunal', 'ravindra', 'kapse', 'india', 'maharashtra', 'pune', '411005', 'krkunal29@gmail.com', '9766695099', 'Pune1', 'Pune2', 'Pune3', '2019-12-17 12:06:19', '0000-00-00 00:00:00', 0);

-- --------------------------------------------------------

--
-- Table structure for table `DocType`
--

CREATE TABLE `DocType` (
  `DocTypeID` int(11) NOT NULL,
  `DocTypeDesc` varchar(255) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `DocType`
--

INSERT INTO `DocType` (`DocTypeID`, `DocTypeDesc`, `CreatedAt`, `UpdatedAt`) VALUES
(1, 'PAN', '2019-12-16 12:12:13', '0000-00-00 00:00:00'),
(2, 'AADHAR', '2019-12-16 12:12:13', '0000-00-00 00:00:00'),
(3, 'Medical Certificate', '2019-12-16 12:12:46', '0000-00-00 00:00:00'),
(4, 'pre hosp prescription', '2019-12-16 12:12:46', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `OrganizationMaster`
--

CREATE TABLE `OrganizationMaster` (
  `OrganizationID` int(11) NOT NULL,
  `OrganizationName` varchar(150) NOT NULL,
  `OrganizationTypeID` int(11) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `OrganizationMaster`
--

INSERT INTO `OrganizationMaster` (`OrganizationID`, `OrganizationName`, `OrganizationTypeID`, `CreatedAt`, `updatedAt`) VALUES
(1, 'ZP primary school', 1, '2019-12-16 12:08:52', '0000-00-00 00:00:00'),
(4, 'ZP primary school1', 2, '2019-12-16 12:11:17', '0000-00-00 00:00:00'),
(5, 'ZP senior College', 2, '2019-12-16 12:11:17', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `OrganizationType`
--

CREATE TABLE `OrganizationType` (
  `OrganizationTypeID` int(11) NOT NULL,
  `OrganizationTypeName` varchar(255) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `OrganizationType`
--

INSERT INTO `OrganizationType` (`OrganizationTypeID`, `OrganizationTypeName`, `CreatedAt`, `UpdatedAt`) VALUES
(1, 'School', '2019-12-16 12:06:23', '0000-00-00 00:00:00'),
(2, 'ZP', '2019-12-16 12:06:23', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `rolemaster`
--

CREATE TABLE `rolemaster` (
  `roleId` int(11) NOT NULL,
  `role` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rolemaster`
--

INSERT INTO `rolemaster` (`roleId`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'School admin', '2019-12-16 11:48:57', '2019-12-16 11:48:57'),
(2, 'staff', '2019-12-16 11:48:57', '2019-12-16 11:48:57'),
(3, 'DHO', '2019-12-16 11:49:22', '2019-12-16 11:49:22'),
(4, 'ZP Clerk', '2019-12-16 11:49:22', '2019-12-16 11:49:22'),
(5, 'Zp Supritendent', '2019-12-16 11:49:45', '2019-12-16 11:49:45'),
(6, 'Deputy EO', '2019-12-16 11:49:45', '2019-12-16 11:49:45'),
(7, 'EO', '2019-12-16 11:50:02', '2019-12-16 11:50:02');

-- --------------------------------------------------------

--
-- Table structure for table `UserClaims`
--

CREATE TABLE `UserClaims` (
  `claimId` int(12) NOT NULL,
  `userId` int(12) NOT NULL,
  `claimDate` date NOT NULL,
  `claimStatus` varchar(50) NOT NULL,
  `claimTypeId` int(12) NOT NULL,
  `Description` text NOT NULL,
  `ContactID` int(12) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `userId` int(11) NOT NULL,
  `OrganizationID` int(12) NOT NULL,
  `roleId` int(11) DEFAULT NULL,
  `emailId` varchar(100) DEFAULT NULL,
  `contactNumber` varchar(50) NOT NULL,
  `contactId` int(12) NOT NULL,
  `upassword` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`userId`, `OrganizationID`, `roleId`, `emailId`, `contactNumber`, `contactId`, `upassword`, `createdAt`, `updatedAt`) VALUES
(1, 1, 2, 'kk@gmail.com', '9766609500', 0, '12345', '2019-12-09 23:04:15', '2019-12-16 17:17:35'),
(2, 1, 2, 'kk1@gmail.com', '9766695099', 0, '12345', '2019-12-09 23:05:58', '2019-12-16 17:18:01'),
(3, 1, 2, 'vk2@gmail.com', '9766695091', 0, '456789', '2019-12-09 23:07:53', '2019-12-16 17:18:07'),
(4, 1, 2, 'vk3@gmail.com', '9766695092', 0, 'ee', '2019-12-09 23:09:10', '2019-12-16 17:18:11'),
(5, 1, 2, 'vk4@gmail.com', '9766695093', 0, '12345', '2019-12-09 23:12:34', '2019-12-16 17:18:16'),
(6, 1, 2, 'kk23@gmail.com', '9766695094', 0, '123456', '2019-12-09 23:17:00', '2019-12-16 17:18:24'),
(7, 1, 2, 'krkunal29@gmail.com', '9766695099', 1, '12345', '2019-12-17 17:30:49', '2019-12-17 17:30:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ClaimApproval`
--
ALTER TABLE `ClaimApproval`
  ADD PRIMARY KEY (`approvalId`);

--
-- Indexes for table `ClaimDocuments`
--
ALTER TABLE `ClaimDocuments`
  ADD PRIMARY KEY (`docId`),
  ADD KEY `DocTypeID` (`DocTypeID`),
  ADD KEY `claimId` (`claimId`);

--
-- Indexes for table `claimStatus`
--
ALTER TABLE `claimStatus`
  ADD PRIMARY KEY (`ClaimStatusId`),
  ADD UNIQUE KEY `ClaimStatusDescription` (`ClaimStatusDescription`);

--
-- Indexes for table `ClaimTypeFlow`
--
ALTER TABLE `ClaimTypeFlow`
  ADD PRIMARY KEY (`ClaimTypeFlowID`);

--
-- Indexes for table `ClaimTypes`
--
ALTER TABLE `ClaimTypes`
  ADD PRIMARY KEY (`ClaimTypesID`);

--
-- Indexes for table `contactmaster`
--
ALTER TABLE `contactmaster`
  ADD PRIMARY KEY (`contactid`),
  ADD UNIQUE KEY `email` (`email`,`phone`);

--
-- Indexes for table `DocType`
--
ALTER TABLE `DocType`
  ADD PRIMARY KEY (`DocTypeID`);

--
-- Indexes for table `OrganizationMaster`
--
ALTER TABLE `OrganizationMaster`
  ADD PRIMARY KEY (`OrganizationID`),
  ADD UNIQUE KEY `OrganizationName` (`OrganizationName`),
  ADD KEY `OrganizationTypeID` (`OrganizationTypeID`);

--
-- Indexes for table `OrganizationType`
--
ALTER TABLE `OrganizationType`
  ADD PRIMARY KEY (`OrganizationTypeID`);

--
-- Indexes for table `rolemaster`
--
ALTER TABLE `rolemaster`
  ADD PRIMARY KEY (`roleId`);

--
-- Indexes for table `UserClaims`
--
ALTER TABLE `UserClaims`
  ADD PRIMARY KEY (`claimId`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`userId`),
  ADD UNIQUE KEY `emailId` (`emailId`,`contactNumber`),
  ADD KEY `user_master_ibfk_1` (`roleId`),
  ADD KEY `OrganizationID` (`OrganizationID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ClaimApproval`
--
ALTER TABLE `ClaimApproval`
  MODIFY `approvalId` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ClaimDocuments`
--
ALTER TABLE `ClaimDocuments`
  MODIFY `docId` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `claimStatus`
--
ALTER TABLE `claimStatus`
  MODIFY `ClaimStatusId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `ClaimTypeFlow`
--
ALTER TABLE `ClaimTypeFlow`
  MODIFY `ClaimTypeFlowID` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ClaimTypes`
--
ALTER TABLE `ClaimTypes`
  MODIFY `ClaimTypesID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `contactmaster`
--
ALTER TABLE `contactmaster`
  MODIFY `contactid` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `DocType`
--
ALTER TABLE `DocType`
  MODIFY `DocTypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `OrganizationMaster`
--
ALTER TABLE `OrganizationMaster`
  MODIFY `OrganizationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `OrganizationType`
--
ALTER TABLE `OrganizationType`
  MODIFY `OrganizationTypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `rolemaster`
--
ALTER TABLE `rolemaster`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `UserClaims`
--
ALTER TABLE `UserClaims`
  MODIFY `claimId` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `ClaimDocuments`
--
ALTER TABLE `ClaimDocuments`
  ADD CONSTRAINT `ClaimDocuments_ibfk_1` FOREIGN KEY (`DocTypeID`) REFERENCES `DocType` (`DocTypeID`),
  ADD CONSTRAINT `ClaimDocuments_ibfk_2` FOREIGN KEY (`claimId`) REFERENCES `UserClaims` (`claimId`);

--
-- Constraints for table `OrganizationMaster`
--
ALTER TABLE `OrganizationMaster`
  ADD CONSTRAINT `OrganizationMaster_ibfk_1` FOREIGN KEY (`OrganizationTypeID`) REFERENCES `OrganizationType` (`OrganizationTypeID`) ON UPDATE NO ACTION;

--
-- Constraints for table `user_master`
--
ALTER TABLE `user_master`
  ADD CONSTRAINT `user_master_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `rolemaster` (`roleId`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `user_master_ibfk_2` FOREIGN KEY (`OrganizationID`) REFERENCES `OrganizationMaster` (`OrganizationID`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
