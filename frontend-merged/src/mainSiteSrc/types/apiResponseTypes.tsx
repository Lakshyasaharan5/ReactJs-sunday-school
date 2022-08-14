import { PlaylistItem, PlaylistsData } from "./interfacesAndTypes";

export interface AllVideosListDataType{
    kind: string,
    etag: string,
    prevPageToken:string,
    nextPageToken: string,
    items:PlaylistItem[],
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
}

export interface allPlaylistsDataType{
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
    items:PlaylistsData[]
}

export interface PlaylistItemsType{
    kind: string,
    etag: string,
    pageInfo: {
        totalResults: number,
        resultsPerPage: number
    }
    items:PlaylistItem[]
}