export const getAnimeList = (type, filter) => {
    return fetch(`https://api.jikan.moe/v4/top/anime?type=${type}&filter=${filter}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(jsonData => {
        return jsonData.data;
    }).catch(error => {
        console.error(error);
    });
};

export const searchAnime = (search, type, filter) => {
    let order = "";
    let status = "";
    if(filter === "upcoming" || filter === "airing") {
        status = filter;
    } else if (filter === "bypopularity") {
        order = "popularity";
    } else {
        order = "favorites";
    }

    return fetch(`https://api.jikan.moe/v4/anime?q=${search}&type=${type}&status=${status}&order_by=${order}`, {
        method: "GET"
    })
    .then(response => response.json())
    .then(jsonData => {
        return jsonData.data;
    }).catch(error => {
        console.error(error);
    });
};