import React, { Component } from "react";
import Episode from "./Episode";
import Grid from "@material-ui/core/Grid";
import PodcastIntro from "./PodcastIntro";
import styles from "./PodcastPage.module.css";
import Box from "@material-ui/core/Box";

class PodcastPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      episodes: []
    };
  }

  async componentDidMount() {
    /* This is where you type in code that will fetch the RSS feed
        parse it it into a javascript object, then use setState() to 
        set the podcasts state */
    // run the parser function to get back an array of episodes
    //parser
    let Parser = require("rss-parser");
    let parser = new Parser({
      // headers: {"Access-Control-Allow-Origin": "https://anchor.fm"},
      customFields: {
        item: [
          ["itunes:episode", "episodeNum"],
          ["itunes:summary", "summary"],
          "pubDate",
          ["itunes:duration", "duration"]
        ]
      }
    });

    let channel = await parser.parseURL(
      "https://cors-anywhere.herokuapp.com/https://anchor.fm/s/c383d4c/podcast/rss"
    );
    let channelResult = [];
    channel.items.forEach(item => {
      let itemObj = {
        id: item["guid"],
        episodeNum: item["episodeNum"],
        title: item["title"],
        summary: item["summary"],
        pubDate: item["pubDate"],
        duration: item["duration"],
        audioLink: item["link"]
      };
      channelResult.push(itemObj);
    });
    // console.log(channelResult);
    let newEpisodes = channelResult;
    // console.log(newEpisodes);
    this.setState({
      episodes: newEpisodes
    });
    this.props.history.push("/podcast");
  }
  render() {
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
          {/* <Grid container align="center" justify="center"> */}
            <p className={styles.allEps}>ALL ALTGRIND EPISODES</p>
          {/* </Grid> */}
          {this.state.episodes &&
            this.state.episodes.map(tidbits => (
              <div>
                <Episode
                  key={tidbits.id}
                  episodeNum={tidbits.episodeNum}
                  title={tidbits.title}
                  pubDate={tidbits.pubDate}
                  duration={tidbits.duration}
                  summary={tidbits.summary}
                  audioLink={tidbits.audioLink}
                />
              </div>
            ))}
          </Grid>

        </Grid>
    );
  }
}

export default PodcastPage;
