const axios = reqire('axios').default;

module.exports = (language) => {
    return axios.get(`https://api.github.com/search/repositories?q=stars:%3E=10000+language:${language}&sort=stars&order=desc`);
}