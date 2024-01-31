import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
// const fetchNewsList = function () {
//   return axios.get(`${config.baseUrl}news/1.json`);
// };

// const fetchJobsList = function () {
//   return axios.get(`${config.baseUrl}jobs/1.json`);
// };

// const fetchAskList = function () {
//   return axios.get(`${config.baseUrl}ask/1.json`);
// };

const fetchList = function (pageName) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
};

const fetchUserInfo = function (user) {
  return axios.get(`${config.baseUrl}user/${user}.json`);
};

const fetchItemView = function (id) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
};

export { fetchList, fetchUserInfo, fetchItemView };
