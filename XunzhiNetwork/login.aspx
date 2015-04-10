﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="XunzhiNetwork.login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="renderer" content="webkit" />
  <meta http-equiv="Cache-Control" content="no-siteapp" />
    <title></title>
    <link rel="stylesheet" href="css/amazeui.min.css" />
    <link rel="alternate icon" type="image/png" href="i/favicon.png" />
      <style>
    .header {
      text-align: center;
    }
    .header h1 {
      font-size: 200%;
      color: #333;
      margin-top: 30px;
    }
    .header p {
      font-size: 14px;
    }
  </style>
</head>
<body>
    <div class="header">
  <div class="am-g">
    <h1>寻知网</h1>
    <p>Find your Knowledge,Find your dream!<br/>寻找你的知识，寻找你的梦想</p>
  </div>
  <hr />
</div>
<div class="am-g">
  <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
    <h3>登录</h3>
    <hr />
    <div class="am-btn-group">
      <a href="#" class="am-btn am-btn-secondary am-btn-sm"><i class="am-icon-github am-icon-sm"></i>Github</a>
      <a href="#" class="am-btn am-btn-success am-btn-sm"><i class="am-icon-google-plus-square am-icon-sm"></i>QQ登录</a>
    </div>
    <br />
    <br />

    <form method="post" class="am-form">
      <label for="email">邮箱:</label>
      <input type="email" name="" id="email" value="" />
      <br />
      <label for="password">密码:</label>
      <input type="password" name="" id="password" value="" />
      <br />
      <label for="remember-me">
        <input id="remember-me" type="checkbox" />
        记住密码
      </label>
      <br />
      <div class="am-cf">
        <input type="submit" name="" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl" />
        <input type="submit" name="" value="忘记密码 ^_^? " class="am-btn am-btn-default am-btn-sm am-fr" />
      </div>
    </form>
    <hr />
    <p>© 2015 Miraculum Team.</p>
  </div>
</div>
</body>
</html>