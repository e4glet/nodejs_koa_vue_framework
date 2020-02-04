/*
Navicat MySQL Data Transfer

Source Server         : 本地mysql
Source Server Version : 50626
Source Host           : localhost:3306
Source Database       : move

Target Server Type    : MYSQL
Target Server Version : 50626
File Encoding         : 65001

Date: 2020-02-04 17:53:07
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `e_usertb`
-- ----------------------------
DROP TABLE IF EXISTS `e_usertb`;
CREATE TABLE `e_usertb` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `e_user` varchar(255) DEFAULT NULL,
  `e_pass` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of e_usertb
-- ----------------------------
INSERT INTO `e_usertb` VALUES ('1', 'e4glet', '123456');
