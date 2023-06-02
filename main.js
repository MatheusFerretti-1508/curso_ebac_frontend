document.addEventListener('DOMContentLoaded', function(e) {
    const pfp = document.getElementById('imagem-perfil'); /*Coletando dados do HTML*/
    const nomeCompleto = document.getElementById('nome'); /*Coletando dados do HTML*/
    const nomeDeUsuario = document.getElementById('nome-usuario'); /*Coletando dados do HTML*/
    const numRepositorios = document.getElementById('num-repositorios'); /*Coletando dados do HTML*/
    const numSeguidores = document.getElementById('num-seguidores'); /*Coletando dados do HTML*/
    const numSeguindo = document.getElementById('num-seguindo'); /*Coletando dados do HTML*/
    const linkPerfil = document.getElementById('link-perfil'); /*Coletando dados do HTML*/

    fetch('https://api.github.com/users/MatheusFerretti-1508') /*Integrando*/
        .then(function(resposta) {
            return resposta.json();
        })
        .then(function(json) {
            const fotoPerfil = json.avatar_url; /*Coletando dados da API*/
            const nome = json.name; /*Coletando dados da API*/
            const userName = json.login; /*Coletando dados da API*/
            const repositorios = json.public_repos; /*Coletando dados da API*/
            const seguidores = json.followers; /*Coletando dados da API*/
            const seguindo = json.following; /*Coletando dados da API*/
            const linkDoPerfil = json.html_url; /*Coletando dados da API*/


            pfp.innerHTML = `<img class="profile-avatar" src="${fotoPerfil}" alt=".">`; /*Aplicando os dados no HTML*/
            nomeCompleto.innerHTML = `<h1 class="profile-name">${nome}</h1>`; /*Aplicando os dados no HTML*/
            nomeDeUsuario.innerHTML = `<h2 class="profile-username">${userName}</h2>`; /*Aplicando os dados no HTML*/  
            numRepositorios.innerHTML = `${repositorios}`; /*Aplicando os dados no HTML*/
            numSeguidores.innerHTML = `${seguidores}`; /*Aplicando os dados no HTML*/
            numSeguindo.innerHTML = `${seguindo}`; /*Aplicando os dados no HTML*/
            linkPerfil.href = linkDoPerfil /*Aplicando os dados no HTML*/
        })
        .catch(function(erro) {
            console.log(erro)
        })
})