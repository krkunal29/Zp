-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: sql304.byethost.com
-- Generation Time: Dec 25, 2019 at 03:11 AM
-- Server version: 5.6.45-86.1
-- PHP Version: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `b17_24905353_zp`
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
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `claimdocuments`
--

CREATE TABLE `claimdocuments` (
  `docId` int(12) NOT NULL,
  `claimId` int(12) NOT NULL,
  `DocTypeID` int(12) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `claimstatus`
--

CREATE TABLE `claimstatus` (
  `ClaimStatusId` int(11) NOT NULL,
  `ClaimStatusDescription` varchar(150) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `claimstatus`
--

INSERT INTO `claimstatus` (`ClaimStatusId`, `ClaimStatusDescription`, `CreatedAt`, `UpdatedAt`) VALUES
(1, 'Approved', '2019-12-16 12:22:07', '0000-00-00 00:00:00'),
(2, 'Rejected', '2019-12-16 12:22:07', '0000-00-00 00:00:00'),
(3, 'Docs Pending', '2019-12-16 12:22:19', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `claimtypeflow`
--

CREATE TABLE `claimtypeflow` (
  `ClaimTypeFlowID` int(12) NOT NULL,
  `ClaimTypeID` int(12) NOT NULL,
  `RoleID` int(12) NOT NULL,
  `FlowOrder` int(12) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `claimtypeflow`
--

INSERT INTO `claimtypeflow` (`ClaimTypeFlowID`, `ClaimTypeID`, `RoleID`, `FlowOrder`, `CreatedAt`, `UpdatedAT`) VALUES
(1, 1, 1, 1, '2019-12-18 09:50:44', '0000-00-00 00:00:00'),
(2, 1, 1, 1, '2019-12-18 09:52:01', '0000-00-00 00:00:00'),
(3, 1, 1, 1, '2019-12-18 09:53:39', '0000-00-00 00:00:00'),
(5, 1, 1, 1, '2019-12-18 11:51:13', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `claimtypes`
--

CREATE TABLE `claimtypes` (
  `ClaimTypesID` int(11) NOT NULL,
  `claim` varchar(255) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `claimtypes`
--

INSERT INTO `claimtypes` (`ClaimTypesID`, `claim`, `CreatedAt`, `UpdatedAt`) VALUES
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
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `contactmaster`
--

INSERT INTO `contactmaster` (`contactid`, `fname`, `mname`, `lname`, `country`, `state`, `city`, `pincode`, `email`, `phone`, `address1`, `address2`, `address3`, `CreatedAt`, `UpdatedAT`, `statuscode`) VALUES
(13, 'Stephan', 'ravindra', 'kapse', 'kk', 'kk', 'kk', '478596', 'gg12@gmail.com', '9766695094', 'ww', 'ww', 'ww', '2019-12-17 16:25:54', '0000-00-00 00:00:00', 1),
(14, 'kk', 'kk', 'kk', 'india', 'maharashtra', 'pune', '411005', 'kk@gmail.com', '9766695099', 'india', 'pune p', 'pune', '2019-12-18 05:09:48', '0000-00-00 00:00:00', 1),
(15, 'kunal1', 'kk', 'kapse1', 'india', 'maharashtra', 'pune', '478596', 'kk2@gmail.com', '9766695099', 'pp', 'pp', 'pp', '2019-12-18 09:40:24', '2019-12-18 12:49:37', 1);

-- --------------------------------------------------------

--
-- Table structure for table `DocType`
--

CREATE TABLE `DocType` (
  `DocTypeID` int(11) NOT NULL,
  `DocTypeDesc` varchar(255) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAt` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `OrganizationMaster`
--

INSERT INTO `OrganizationMaster` (`OrganizationID`, `OrganizationName`, `OrganizationTypeID`, `CreatedAt`, `updatedAt`) VALUES
(1, 'ZP primary school', 1, '2019-12-16 12:08:52', '0000-00-00 00:00:00'),
(4, 'ZP primary school jalgoan', 2, '2019-12-16 12:11:17', '2019-12-18 09:37:44'),
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
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `rolemaster`
--

INSERT INTO `rolemaster` (`roleId`, `role`, `createdAt`, `updatedAt`) VALUES
(1, 'Student Admin', '2019-12-16 11:48:57', '2019-12-19 00:45:15'),
(2, 'Staff', '2019-12-16 11:48:57', '2019-12-19 00:45:43'),
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
  `hospitalname` varchar(255) NOT NULL,
  `hospitaladdress` text NOT NULL,
  `amount` int(11) NOT NULL,
  `fromDate` date NOT NULL,
  `uptoDate` date NOT NULL,
  `medicine` int(11) NOT NULL,
  `ico` int(11) NOT NULL,
  `coat` int(11) NOT NULL,
  `approvedmedicine` varchar(255) NOT NULL,
  `approvedico` varchar(255) NOT NULL,
  `approvedcoat` varchar(255) NOT NULL,
  `claimStatus` varchar(50) NOT NULL,
  `claimTypeId` int(12) NOT NULL,
  `Description` text NOT NULL,
  `ContactID` int(12) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `UpdatedAT` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`userId`, `OrganizationID`, `roleId`, `emailId`, `contactNumber`, `contactId`, `upassword`, `createdAt`, `updatedAt`) VALUES
(10, 1, 1, 'admin@gmail.com', '9766695094', 13, '12345', '2019-12-17 21:55:54', '2019-12-18 04:20:32'),
(13, 1, 1, 'kk@gmail.com', '9766695099', 14, '12345', '2019-12-18 10:39:48', '2019-12-18 10:39:48'),
(14, 4, 1, 'kk2@gmail.com', '9766695099', 15, '12345', '2019-12-18 04:40:24', '2019-12-18 07:49:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ClaimApproval`
--
ALTER TABLE `ClaimApproval`
  ADD PRIMARY KEY (`approvalId`);

--
-- Indexes for table `claimdocuments`
--
ALTER TABLE `claimdocuments`
  ADD PRIMARY KEY (`docId`),
  ADD KEY `DocTypeID` (`DocTypeID`),
  ADD KEY `claimId` (`claimId`);

--
-- Indexes for table `claimstatus`
--
ALTER TABLE `claimstatus`
  ADD PRIMARY KEY (`ClaimStatusId`),
  ADD UNIQUE KEY `ClaimStatusDescription` (`ClaimStatusDescription`);

--
-- Indexes for table `claimtypeflow`
--
ALTER TABLE `claimtypeflow`
  ADD PRIMARY KEY (`ClaimTypeFlowID`);

--
-- Indexes for table `claimtypes`
--
ALTER TABLE `claimtypes`
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
  ADD UNIQUE KEY `contactId_2` (`contactId`),
  ADD UNIQUE KEY `emailId` (`emailId`,`contactNumber`),
  ADD KEY `contactId` (`contactId`),
  ADD KEY `OrganizationID` (`OrganizationID`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ClaimApproval`
--
ALTER TABLE `ClaimApproval`
  MODIFY `approvalId` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `claimdocuments`
--
ALTER TABLE `claimdocuments`
  MODIFY `docId` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `claimstatus`
--
ALTER TABLE `claimstatus`
  MODIFY `ClaimStatusId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `claimtypeflow`
--
ALTER TABLE `claimtypeflow`
  MODIFY `ClaimTypeFlowID` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `claimtypes`
--
ALTER TABLE `claimtypes`
  MODIFY `ClaimTypesID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `contactmaster`
--
ALTER TABLE `contactmaster`
  MODIFY `contactid` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `DocType`
--
ALTER TABLE `DocType`
  MODIFY `DocTypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `OrganizationMaster`
--
ALTER TABLE `OrganizationMaster`
  MODIFY `OrganizationID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `OrganizationType`
--
ALTER TABLE `OrganizationType`
  MODIFY `OrganizationTypeID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `rolemaster`
--
ALTER TABLE `rolemaster`
  MODIFY `roleId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `UserClaims`
--
ALTER TABLE `UserClaims`
  MODIFY `claimId` int(12) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
