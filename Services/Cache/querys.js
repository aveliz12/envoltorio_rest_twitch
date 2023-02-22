import { gql } from "@apollo/client/core/core.cjs";

export const DATA_LIVESTREAMS = gql`
  query getDataLiveStreamsWithCache {
    getLiveStreams {
      id
      user_id
      user_login
      user_name
      game_id
      game_name
      type
      title
      viewer_count
      started_at
      language
      thumbnail_url
      tag_ids
      tags
      is_mature
    }
  }
`;

export const DATA_VIDEOSBYGAME = gql`
  query getVideosByGameWithCache($id: ID!) {
    getVideosByGame(id: $id) {
      id
      stream_id
      user_id
      user_login
      user_name
      title
      description
      created_at
      published_at
      url
      thumbnail_url
      viewable
      view_count
      language
      type
      duration
      muted_segments
    }
  }
`;

export const DATA_INFORMATIONCHANNEL = gql`
  query getChannelInformationWithCache($id: ID!) {
    getChannelInformation(id: $id) {
      broadcaster_id
      broadcaster_login
      broadcaster_name
      broadcaster_language
      game_id
      game_name
      title
      delay
      tags
    }
  }
`;

export const DATA_CLIPSBYUSER = gql`
  query getClipsByUserWithCache($id: ID!) {
    getClipsByUserId(id: $id) {
      id
      url
      embed_url
      broadcaster_id
      broadcaster_name
      creator_id
      creator_name
      video_id
      game_id
      language
      title
      view_count
      created_at
      thumbnail_url
      duration
      vod_offset
    }
  }
`;

export const DATA_INFORMATIONGAME = gql`
  query getInformationGameWithCache($id: ID!) {
    getInformationGameById(id: $id) {
      id
      name
      box_art_url
      igdb_id
    }
  }
`;