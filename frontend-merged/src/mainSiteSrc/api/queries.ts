import { useQuery } from '@tanstack/react-query'
import { fetchRecentData, fetchUpcomingData, getAllPlaylistsData, getAllVideosList, getPlaylistItems } from './apiCalls'


export const useRecentVideosList = () => useQuery(['recentVideosList'],fetchRecentData, {
    staleTime: Infinity
  })

export const useUpcomingVideosList = () => useQuery(['UpComingVideosList'],fetchUpcomingData, {
    staleTime: Infinity
  });

const params = {
  nextButtonToken:null,
  prevButtonToken:null
}

export const useAllVideosList = () => useQuery(['allVideosList',params],()=>getAllVideosList(params))

export const useAllPlaylistsData = () => useQuery(['allPlaylistData'],getAllPlaylistsData);

export const usePlaylistItems = (playlistId:string) => useQuery(['recentPlaylistItems',playlistId],()=> getPlaylistItems(playlistId));

// export const useCurrPlaylistItems = ()

