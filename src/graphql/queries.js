/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getArtist = /* GraphQL */ `
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
      contests {
        items {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listArtists = /* GraphQL */ `
  query ListArtists(
    $filter: ModelArtistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listArtists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contests {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContest = /* GraphQL */ `
  query GetContest($id: ID!) {
    getContest(id: $id) {
      id
      headline
      description
      encouragementHeadline
      encouragementDescription
      landingButtonText
      deadline
      artistID
      artist {
        id
        name
        contests {
          nextToken
        }
        createdAt
        updatedAt
      }
      actions {
        items {
          id
          preActionText
          postActionText
          pointValue
          contestID
          url
          createdAt
          updatedAt
        }
        nextToken
      }
      pictureID
      picture {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      testPictureUrl
      subscribers {
        items {
          id
          contestID
          enduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
        }
        nextToken
      }
      streetTeamUrl
      spotifyPlayUrl
      spotifyFollowPlaylistUrl
      spotifyFollowArtistUrl
      spotifySaveUrl
      createdAt
      updatedAt
    }
  }
`;
export const listContests = /* GraphQL */ `
  query ListContests(
    $filter: ModelContestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContestAction = /* GraphQL */ `
  query GetContestAction($id: ID!) {
    getContestAction(id: $id) {
      id
      preActionText
      postActionText
      pointValue
      contestID
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduserActions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      actionType {
        id
        value
        createdAt
        updatedAt
      }
      url
      createdAt
      updatedAt
    }
  }
`;
export const listContestActions = /* GraphQL */ `
  query ListContestActions(
    $filter: ModelContestActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        preActionText
        postActionText
        pointValue
        contestID
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
        }
        enduserActions {
          nextToken
        }
        actionType {
          id
          value
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getActionType = /* GraphQL */ `
  query GetActionType($id: ID!) {
    getActionType(id: $id) {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const listActionTypes = /* GraphQL */ `
  query ListActionTypes(
    $filter: ModelActionTypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActionTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContestSubscription = /* GraphQL */ `
  query GetContestSubscription($id: ID!) {
    getContestSubscription(id: $id) {
      id
      contestID
      enduserID
      enduserPoints
      completeStreetTeamJoin
      completeSpotifyFollow
      completeSpotifySave
      completeSpotifyPlay
      contest {
        id
        headline
        description
        encouragementHeadline
        encouragementDescription
        landingButtonText
        deadline
        artistID
        artist {
          id
          name
          createdAt
          updatedAt
        }
        actions {
          nextToken
        }
        pictureID
        picture {
          id
          publicUrl
          name
          owner
          visibility
          createdAt
          updatedAt
        }
        testPictureUrl
        subscribers {
          nextToken
        }
        streetTeamUrl
        spotifyPlayUrl
        spotifyFollowPlaylistUrl
        spotifyFollowArtistUrl
        spotifySaveUrl
        createdAt
        updatedAt
      }
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listContestSubscriptions = /* GraphQL */ `
  query ListContestSubscriptions(
    $filter: ModelContestSubscriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContestSubscriptions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        contestID
        enduserID
        enduserPoints
        completeStreetTeamJoin
        completeSpotifyFollow
        completeSpotifySave
        completeSpotifyPlay
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
        }
        enduser {
          id
          username
          firstName
          lastName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEnduser = /* GraphQL */ `
  query GetEnduser($id: ID!) {
    getEnduser(id: $id) {
      id
      username
      firstName
      lastName
      actions {
        items {
          enduserID
          actionID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
      subscriptions {
        items {
          id
          contestID
          enduserID
          enduserPoints
          completeStreetTeamJoin
          completeSpotifyFollow
          completeSpotifySave
          completeSpotifyPlay
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listEndusers = /* GraphQL */ `
  query ListEndusers(
    $filter: ModelEnduserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEndusers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEnduserActions = /* GraphQL */ `
  query GetEnduserActions($id: ID!) {
    getEnduserActions(id: $id) {
      enduserID
      enduser {
        id
        username
        firstName
        lastName
        actions {
          nextToken
        }
        subscriptions {
          nextToken
        }
        createdAt
        updatedAt
      }
      actionID
      action {
        id
        preActionText
        postActionText
        pointValue
        contestID
        contest {
          id
          headline
          description
          encouragementHeadline
          encouragementDescription
          landingButtonText
          deadline
          artistID
          pictureID
          testPictureUrl
          streetTeamUrl
          spotifyPlayUrl
          spotifyFollowPlaylistUrl
          spotifyFollowArtistUrl
          spotifySaveUrl
          createdAt
          updatedAt
        }
        enduserActions {
          nextToken
        }
        actionType {
          id
          value
          createdAt
          updatedAt
        }
        url
        createdAt
        updatedAt
      }
      status
      createdAt
      updatedAt
    }
  }
`;
export const listEnduserActionss = /* GraphQL */ `
  query ListEnduserActionss(
    $filter: ModelEnduserActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnduserActionss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        enduserID
        enduser {
          id
          username
          firstName
          lastName
          createdAt
          updatedAt
        }
        actionID
        action {
          id
          preActionText
          postActionText
          pointValue
          contestID
          url
          createdAt
          updatedAt
        }
        status
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPicture = /* GraphQL */ `
  query GetPicture($id: ID!) {
    getPicture(id: $id) {
      id
      publicUrl
      name
      owner
      visibility
      createdAt
      file {
        bucket
        region
        key
      }
      updatedAt
    }
  }
`;
export const listPictures = /* GraphQL */ `
  query ListPictures(
    $filter: ModelPictureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publicUrl
        name
        owner
        visibility
        createdAt
        file {
          bucket
          region
          key
        }
        updatedAt
      }
      nextToken
    }
  }
`;
