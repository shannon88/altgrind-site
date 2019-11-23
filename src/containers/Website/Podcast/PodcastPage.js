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
      <div>
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
          </Grid>
        </Grid>
        {/* <React.Fragment>
                {episodes &&
                    episodes.items.map(entry => (
                        <p key={entry.id}>{entry.title}</p>
                    ))}
        </React.Fragment> */}
        <React.Fragment>
          {episodes &&
            episodes.items.map(tidbits => (
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
                {console.log(tidbits.duration)}
              </div>
            ))}
        </React.Fragment>
      </div>

      // <Grid
      //   container
      //   direction="row"
      //   justify="center"
      //   // alignContent="center"
      //   // alignItems="flex-start"
      //   className={styles.grid}
      // >
      //   <Grid item md={6}>
      //     <Grid
      //       container
      //       align="center"
      //       justify="center"
      //       // style={{ minWidth: "50%" }}
      //     >
      //       <PodcastIntro />
      //     </Grid>
      //   </Grid>
      //   <Grid item md={6}>
      //     {/* <Grid container align="center" justify="center"> */}
      //     <p className={styles.allEps}>ALL ALTGRIND EPISODES</p>
      //     {/* </Grid> */}
      //     <React.Fragment>
      //     {episodes &&
      //       episodes.items.map(tidbits => (
      //         <div>
      //           <Episode
      //             key={tidbits.id}
      //             episodeNum={tidbits.episodeNum}
      //             title={tidbits.title}
      //             pubDate={tidbits.pubDate}
      //             duration={tidbits.duration}
      //             summary={tidbits.summary}
      //             audioLink={tidbits.audioLink}
      //           />
      //         </div>
      //       ))}
      //     </React.Fragment>
      //   </Grid>
      // </Grid>
    );
  }
}

export default PodcastPage;
