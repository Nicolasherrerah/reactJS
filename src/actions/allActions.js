export const addManga = (manga) =>{
    return {type: 'ADD_MANGA', manga}
};

export const FavoriteManga = (bool, id) =>{
    return {type: 'UPDATE_FAVORITE_MANGA', favorite: bool, id}
};

export const UpdateMangaChapter = (chapter, id) =>{
    return {type: 'UPDATE_MANGA_CHAPTER', mangaChapter: chapter, id}
};

export const UpdateAnimeChapter = (chapter, id) =>{
    return {type: 'UPDATE_ANIME_CHAPTER', animeChapter: chapter, id}
};

export const FavoriteAnime = (bool, id) =>{
    return {type: 'UPDATE_FAVORITE_ANIME', favorite: bool, id}
};

export const addAnime = (anime) =>{
    return {type: 'ADD_ANIME', anime}
};
