// 云函数入口文件
const cloud = require('wx-server-sdk')
const { getGamesAmerica } = require('nintendo-switch-eshop');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  // var games = getGamesAmerica()

  var theUrl = "https://switchsales.herokuapp.com/games/eshop-sales";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );

  return {
    USGames: xmlHttp.responseText,
  }
}