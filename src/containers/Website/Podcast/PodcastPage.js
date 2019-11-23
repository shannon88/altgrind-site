import React, { Component } from "react";
import Episode from "./Episode";
import Grid from "@material-ui/core/Grid";
import PodcastIntro from "./PodcastIntro";
import styles from "./PodcastPage.module.css";
import Box from "@material-ui/core/Box";

class PodcastPage extends Component {
  state = {
    episodes: null
  };
  componentDidMount() {
    fetch("/.netlify/functions/server/api/rss")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then(data =>
        this.setState({
          episodes: data.feed
        })
      )
      .catch(err => alert(err));
  }

  render() {
    const { episodes } = this.state;
    return (
        <Grid
          container
          direction="row"
          justify="center"
          // alignContent="center"
          // alignItems="flex-start"
          className={styles.grid}
        >
          <Grid item md={6}>
            <Grid
              container
              align="center"
              justify="center"
              // style={{ minWidth: "50%" }}
            >
              <PodcastIntro />
            </Grid>
          </Grid>
          <Grid item md={6}>
            <p className={styles.allEps}>ALL ALTGRIND EPISODES</p>
            <React.Fragment>
          {episodes &&
            episodes.items.map(tidbits => (
              <div>
                <Episode
                  key={tidbits.id}
                  episodeNum={tidbits.itunes.episode}
                  title={tidbits.title}
                  pubDate={tidbits.pubDate}
                  duration={tidbits.itunes.duration}
                  summary={tidbits.contentSnippet}
                  audioLink={tidbits.link}
                />
              </div>
            ))}
        </React.Fragment>
          </Grid>
        </Grid>
    );
  }
}

export default PodcastPage;
