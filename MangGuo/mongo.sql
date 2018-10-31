/*
 Navicat MySQL Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50703
 Source Host           : localhost:3306
 Source Schema         : mongo

 Target Server Type    : MySQL
 Target Server Version : 50703
 File Encoding         : 65001

 Date: 19/09/2018 09:06:32
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(36) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
INSERT INTO `admin_table` VALUES (1, 'admin', '697289ab58537f3326accc5f29560416');

-- ----------------------------
-- Table structure for article_table
-- ----------------------------
DROP TABLE IF EXISTS `article_table`;
CREATE TABLE `article_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of article_table
-- ----------------------------
INSERT INTO `article_table` VALUES (1, '芒果很黄（厦大沙坡尾店）的马蜂窝');
INSERT INTO `article_table` VALUES (2, 'ofo x 芒果很黄，要承包整个夏天的黄色甜蜜！');
INSERT INTO `article_table` VALUES (3, '2017沙坡尾美食攻略--文艺潮流范必去的那些网红店');
INSERT INTO `article_table` VALUES (4, '芒果很黄（世茂双子塔店）厦门-大众点评网');

-- ----------------------------
-- Table structure for banner_table
-- ----------------------------
DROP TABLE IF EXISTS `banner_table`;
CREATE TABLE `banner_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `content` varchar(555) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `second_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `third_title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of banner_table
-- ----------------------------
INSERT INTO `banner_table` VALUES (1, '芒果很黄，始创于2013年，是厦门芒果很芒文化传播有限公司旗下的连锁甜品品牌，由数名热爱甜品及潮流文化的90后发起创建，立志打造跨界的潮流甜品品牌。芒果很黄专注芒果口味垂直细分市场，将贴合品牌特质的大胆创意注入产品表里，提倡活出个性的生活态度，鼓励年轻人敢于面对真实的自我，大胆做自己。目前品牌已覆盖福建、江西、广东、广西、湖南、四川、江苏、山西，采取直营+加盟灵活的经营方式，根据选址提供差异化的消费体验。', '芒果很黄，始创于2013年，是厦门芒果很芒文化传播有限公司旗下的连锁甜品品牌，由数名热爱甜品及潮流文化的90后发起创建，立志打造跨界的潮流甜品品牌。', '芒果很黄专注芒果口味垂直细分市场，将贴合品牌特质的大胆创意注入产品表里，提倡活出个性的生活态度，鼓励年轻人敢于面对真实的自我，大胆做自己。', '目前品牌已覆盖福建、江西、广东、广西、湖南、四川、江苏、山西，采取直营+加盟灵活的经营方式，根据选址提供差异化的消费体验。');

-- ----------------------------
-- Table structure for banners_table
-- ----------------------------
DROP TABLE IF EXISTS `banners_table`;
CREATE TABLE `banners_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `href` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of banners_table
-- ----------------------------
INSERT INTO `banners_table` VALUES (1, 'fsfsdff', 'fsdfdsfdgfdgfdgd', '987654');
INSERT INTO `banners_table` VALUES (2, '佛挡杀佛', 'fdsf', '发的所发生的');
INSERT INTO `banners_table` VALUES (3, '1234', 'eq', 'fds');

-- ----------------------------
-- Table structure for blog_table
-- ----------------------------
DROP TABLE IF EXISTS `blog_table`;
CREATE TABLE `blog_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `view` int(10) NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of blog_table
-- ----------------------------
INSERT INTO `blog_table` VALUES (1, '陈先生', '官方微博', '一定要挂一挂这家清纯不做作的芒果店 很黄很暴力...', '1526793240', 520, 'http://www.beyellow.cn/include/thumb.php?dir=upload/201610/1477031900.png&x=200&y=120');
INSERT INTO `blog_table` VALUES (2, '陈小琪', '芒果很黄（厦大沙坡尾店）的马蜂窝', '一定要挂一挂', '1526879640', 1314, 'http://www.beyellow.cn/include/thumb.php?dir=upload/201802/1519707083.png&x=200&y=120');
INSERT INTO `blog_table` VALUES (3, '库昊', 'ofo x 芒果很黄，要承包整个夏天的黄色甜蜜！', '文艺潮流范必去的那些网红店...', '1527153120', 30, 'http://www.beyellow.cn/include/thumb.php?dir=upload/201802/1519706776.png&x=200&y=120');
INSERT INTO `blog_table` VALUES (4, '黄先生', '2017沙坡尾美食攻略--文艺潮流范必去的网红店', '挂一挂这家清纯不做作的芒果店', '1527219300', 288, 'http://www.beyellow.cn/include/thumb.php?dir=upload/201703/1489505305.jpg&x=200&y=120');
INSERT INTO `blog_table` VALUES (5, '王女士', 'ofo x 芒果很黄，要承包整个夏天的黄色甜蜜！', '这家清纯不做作的芒果店很暴力...', '1527315960', 346, 'http://www.beyellow.cn/include/thumb.php?dir=upload/201610/1477027320.jpg&x=200&y=120');
INSERT INTO `blog_table` VALUES (6, '王先生', '2017沙坡尾美食攻略--文艺潮流范必去的网红店', '很黄很暴力...', '1527431195', 542, 'http://www.beyellow.cn/include/thumb.php?dir=upload/201610/1477027624.png&x=200&y=120');

-- ----------------------------
-- Table structure for content_table
-- ----------------------------
DROP TABLE IF EXISTS `content_table`;
CREATE TABLE `content_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(555) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `alt` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of content_table
-- ----------------------------
INSERT INTO `content_table` VALUES (1, '与芒果死磕到底！', '\r\n\r\n在中国，我们也只做一件事，就是做好一份美味的芒果甜品。', '../../static/images/ct01.jpg', '与芒果死磕到底！');
INSERT INTO `content_table` VALUES (2, '喜欢一个人 始于颜值 陷于才华 忠于人品！', '\r\n\r\n据说爱吃芒果的人，颜值都比较高！', '../../static/images/ct02.jpg', '喜欢一个人 始于颜值 陷于才华 忠于人品！');
INSERT INTO `content_table` VALUES (3, '外表很高冷 其实很逗比！', '\r\n\r\n我知道你就喜欢我一本正经胡说八道的样子！', '../../static/images/ct03.jpg', '外表很高冷 其实很逗比！');

-- ----------------------------
-- Table structure for news_table
-- ----------------------------
DROP TABLE IF EXISTS `news_table`;
CREATE TABLE `news_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `content` varchar(555) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` varchar(66) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `view` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of news_table
-- ----------------------------
INSERT INTO `news_table` VALUES (1, '陈先生', '官方微博', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201610/1477031900.png&x=400&y=300', '一定要挂一挂这家清纯不做作的芒果店 很黄很暴力...', '1526793240', '520');
INSERT INTO `news_table` VALUES (2, '陈小琪', '芒果很黄（厦大沙坡尾店）的马蜂窝', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201802/1519707083.png&x=400&y=300', '一定要挂一挂', '1526879640', '1314');
INSERT INTO `news_table` VALUES (3, '库昊', 'ofo x 芒果很黄，要承包整个夏天的黄色甜蜜！', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201802/1519706776.png&x=400&y=300', '文艺潮流范必去的那些网红店...', '1527153120', '30');
INSERT INTO `news_table` VALUES (4, '黄先生', '2017沙坡尾美食攻略--文艺潮流范必去的网红店', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201703/1489505305.jpg&x=400&y=300', '挂一挂这家清纯不做作的芒果店', '1527219300', '288');
INSERT INTO `news_table` VALUES (5, '王女士', '	\r\n芒果很黄（世茂双子塔店）厦门-大众点评网', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201610/1477027320.jpg&x=400&y=300', '这家清纯不做作的芒果店很暴力...', '1527315960', '346');
INSERT INTO `news_table` VALUES (6, '王先生', '	\r\n浪在沙坡尾小心被这家很黄很暴力的芒果专门店绑架', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201610/1477027624.png&x=400&y=300', '很黄很暴力...', '1527431195', '542');
INSERT INTO `news_table` VALUES (7, 'beyellow', '	\r\n在芒果很黄尝正宗厦门甜品', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201610/1477028480.png&x=400&y=300', NULL, '1527431195', '244');
INSERT INTO `news_table` VALUES (8, '陈女士', '	\r\n【美食】厦门沙坡尾芒果很黄甜品店', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201610/1477028458.jpg&x=400&y=300', '遇见这家店是一个偶然，本来只是想找个地方休息一下，结果遇见了芒果很黄。...', '1527431195', '5200');
INSERT INTO `news_table` VALUES (10, '黄女士', '	\r\n芒果很黄(张三的店)厦门-大众点评网', 'http://www.beyellow.cn/include/thumb.php?dir=../upload/201610/1477027297.jpg&x=400&y=300', 'http://www.dianping.com/shop/21119714...', '1527219300', '323');

-- ----------------------------
-- Table structure for swiper_table
-- ----------------------------
DROP TABLE IF EXISTS `swiper_table`;
CREATE TABLE `swiper_table`  (
  `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `imgUrl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `title` varchar(32) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of swiper_table
-- ----------------------------
INSERT INTO `swiper_table` VALUES (1, '../../static/images/333.jpg', '跨界');
INSERT INTO `swiper_table` VALUES (2, '../../static/images/11.jpg', '潮流');
INSERT INTO `swiper_table` VALUES (3, '../../static/images/22.jpg', '甜品');

SET FOREIGN_KEY_CHECKS = 1;
