import React, { Component } from "react";
import Episode from "./Episode";
import Grid from "@material-ui/core/Grid";
import PodcastIntro from "./PodcastIntro";
import styles from "./PodcastPage.module.css";

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
      "https://anchor.fm/s/c383d4c/podcast/rss"
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
  }
  render() {
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignContent="left"
          alignItems="flex-start"
          className={styles.grid}
        >
          <Grid item md>
            <Grid container align="center" justify="center">
              <PodcastIntro />
            </Grid>
          </Grid>
          <Grid item md>
            <Grid container align="center" justify="center">
              <p className={styles.allEps}>ALL ALTGRIND EPISODES</p>
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
        </Grid>
      </div>
    );
  }
}

export default PodcastPage;
