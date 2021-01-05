import styled from 'styled-components'

export const MusicCardStyle = styled.div`
  .musics__card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 300px;
    min-height: 250px;
    margin-top: 0.725em;

    color: ${(props) => (props.dark ? '#FF76D7' : '#A0E02C')};
    align-items: center;
    border-radius: 15px;
    background-color: ${(props) =>
      props.dark ? '#2B302A' : '#FBFBFB'};
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.28),
      3px 3px 5px rgba(0, 0, 0, 0.28);
    padding: 1em 0;

    .musics__card-img {
      display: flex;
      width: 75%;
      flex-direction: column;
      padding: 1em 0;

      img {
        object-fit: cover;
        border-radius: 0.5em;
        width: 100%;
        margin-bottom: 0.525em;
      }
    }
    .musics__card-infos {
      display: flex;
      width: 90%;
      height: 90%;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      p,
      small,
      h4,
      h2,
      h3 {
        margin: 0;
        color: inherit;
      }
    }
    .musics__card-action {
      display: flex;
      width: 90%;
      justify-content: space-between;
      margin-top: 1em;

      button {
        border-radius: 50%;
        background-color: ${(props) =>
          props.dark ? '#FF76D7' : '#662D6B'};
        border-color: ${(props) =>
          props.dark ? '#FF76D7' : '#662D6B'};
        align-self: flex-end;
        padding: 1.25em 1.25em;

        transition: color ease-in-out 200ms;
        transition: border-color ease-in-out 200ms;
        transition: background-color ease-in-out 200ms;

        &:focus,
        &:hover {
          border-color: ${(props) =>
            props.dark ? '#662D6B' : '#FF76D7'};
          background-color: ${(props) =>
            props.dark ? '#662D6B' : '#FF76D7'};
          color: ${(props) => (props.dark ? '#662D6B' : '#FF76D7')};
        }
      }
    }
  }
  audio {
    margin: 0.525em 0;
    width: 250px;
    height: 50px;
    border-radius: 8px;
    outline: none;
    color: #fff;

    &::-webkit-media-controls-panel,
    &::-webkit-media-controls-enclosure {
      display: flex;
      background-color: ${(props) =>
        props.dark ? '#FF76D79F' : '#662D6B9F'};

      overflow: hidden;
      outline-color: transparent;
      border-color: transparent;
      border-radius: 8px;

      -webkit-user-select: none;
    }
    &::-webkit-media-controls-timeline-container,
    &::-webkit-media-controls-volume-slider-container {
      outline: #fff;
    }
    &::-webkit-media-controls-play-button,
    &::-webkit-media-controls-mute-button,
    &::-webkit-media-controls-timeline,
    &::-webkit-media-controls-current-time-display,
    &::-webkit-media-controls-time-remaining-display,
    &::-webkit-media-controls-volume-slider {
      color: rgba(255, 255, 255, 1) !important;
      fill: rgba(255, 255, 255, 1);
    }
  }
  @media (min-width: 768px) {
    .musics__card {
      width: 100%;
      max-width: 768px;
      max-height: 300px;

      flex-flow: row;
      padding: 0 1em;
    }
    .musics__card-img {
      width: auto;
      min-width: 100px;
      max-height: 270px;
    }
    .musics__card-infos {
      flex-flow: row;
      justify-content: space-around;
      width: 100%;

      hr {
        margin: 15px;
      }
    }
    .musics__card-info {
      margin: 0;
      margin-left: 2em;
      width: 100%;

      .card__title {
        display: flex;
        align-items: baseline;
        margin-bottom: 2em;
      }
    }

    .musics__card-action {
      flex-flow: row;
    }
  }
`
